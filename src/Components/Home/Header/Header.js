import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <>
            <Navbar className='nav-bar' collapseOnSelect expand="lg" bg="" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand href="#home" id='nav-title'>Peters Photography</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link  as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>

                            {
                                user ?
                                    (<Nav.Link eventKey={2} onClick={logout}>
                                        Logout
                                    </Nav.Link>)
                                    :
                                    (<Nav.Link eventKey={2} as={Link} to="/login">
                                        Login
                                    </Nav.Link>)
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;