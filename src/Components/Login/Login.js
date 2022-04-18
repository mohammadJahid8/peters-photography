
import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
        generalError: '',
    })

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailChange = (event) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value });
            setErrors({ ...errors, emailError: '' });
        }
        else {
            setErrors({ ...errors, emailError: 'Invalid email' });
            setUserInfo({ ...userInfo, email: '' });
        }
    }

    const passwordChange = (event) => {
        const passRegex = /.{6,}/;
        const validPass = passRegex.test(event.target.value);

        if (validPass) {
            setUserInfo({ ...userInfo, password: event.target.value });
            setErrors({ ...errors, passwordError: '' });
        }
        else {
            setErrors({ ...errors, passwordError: 'Password must be at least 6 characters' });
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password);

    }
    useEffect(() => {
        if (hookError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast('invalid email')
                    break;
                case 'auth/wrong-password':
                    toast('invalid password')
                    break;
                case 'auth/user-not-found':
                    toast('user not found')
                    break;
                default:
                    toast('something went wrong')
                    break;
            }
        }
    }, [hookError]);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user])

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const handleResetPassword = async () => {
        if (userInfo.email) {
            await sendPasswordResetEmail(userInfo.email);
            toast('Password reset email sent');
        }
        else {
            toast('Please enter your email');
        }
    }

    return (
        <>
            <Header></Header>
            <div className="container  mx-auto login-form ">
                <h2 className=' text-center mt-3 mb-4 title'>Please Login</h2>

                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control className='input' onChange={handleEmailChange} type="email" placeholder="Enter email" required />
                        {errors?.emailError && <p className="error-msg">{errors.emailError}</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control className='input' onChange={passwordChange} type="password" placeholder="Password" required />
                        {errors?.passwordError && <p className="error-msg">{errors.passwordError}</p>}
                    </Form.Group>
                    <p>Forget Password? <Link to='/login' onClick={handleResetPassword} className="text-primary">Reset</Link></p>
                    <p>Don't have any account? <Link to='/signup' className="text-primary">PLease Sign Up</Link></p>
                    <Button variant="dark w-50 mx-auto d-block " type="submit" className='input'>
                        Login
                    </Button>
                    <SocialLogin />
                    <ToastContainer />
                </Form>

            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;