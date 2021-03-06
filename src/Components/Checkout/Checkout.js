import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';

const Checkout = () => {
    return (
        <>
            <Header />
            <div className='w-75 container mt-5 mb-5'>
                <h2 className="mb-3 title text-center">Please Fill Out The Form</h2>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="username">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control className='input' type="text" placeholder="User Name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control className='input' type="email" placeholder="Enter email" />
                        </Form.Group>

                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control className='input' placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control className='input' placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control className='input' />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select className='input' defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="number">
                            <Form.Label>Number</Form.Label>
                            <Form.Control className='input' type="number" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3 " id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button className='input' variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Checkout;