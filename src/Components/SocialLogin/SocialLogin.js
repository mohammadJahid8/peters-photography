import React, { useEffect } from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import google from '../../images/social/google.png';
import github from '../../images/social/github.png';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const [signInWithGoogle, googleUser, gloading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, GitUser, Gitloading, GitError] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (googleUser || GitUser) {
            navigate(from);
        }
    }, [googleUser, GitUser])
    return (
        <div>
            <div className='d-flex align-items-center mt-2'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline-secondary w-50 mx-auto d-block my-2'>
                    <img style={{ width: '22px' }} src={google} alt="" />
                    <span className='px-1'> Google Sign In</span></button>
            </div>

            <div>
                <button onClick={() => signInWithGithub()} className='btn btn-outline-secondary w-50 mx-auto d-block'>
                    <img style={{ width: '22px' }} src={github} alt="" />
                    <span className='px-1'> Github Sign In</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;