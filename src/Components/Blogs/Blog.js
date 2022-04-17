import React from 'react';
import { Table } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <div className="container mb-5">
            <div className="blogs mb-4 mt-5">
                <h3>Difference between authorization and authentication?</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Authentication</th>
                            <th>Authorization</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>Authentication verifies who the user is</td>
                            <td>In Authorization users or persons are validated.</td>

                        </tr>
                        <tr>

                            <td>Authentication is the first step of authorization so always comes first</td>
                            <td>Authorization is done after successful authentication.</td>

                        </tr>
                        <tr>

                            <td>Authentication done before the authorization</td>
                            <td>Authorization is done after the authentication process.</td>

                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="blog-info">
                <div className="blogs">
                    <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p>Firebase used a Backend-as-a-Service. It provides us a variety of tools and services to develop quality apps, grow user base. It is mainly used for authenctication.We can authorize our sites by google,github,facebook,email and pass etc..React firebase hooks made it more easier for authentication.But there are many more alternative of Firebase
                        <ul>
                            <li>Back4App</li>
                            <li>Parse</li>
                            <li>Supabase</li>
                            <li>Nhost</li>
                            <li>Kuzzle</li>
                        </ul>
                    </p>
                </div>
                <div className="blogs">
                    <h3>What other services does firebase provide other than authentication</h3>
                    <p>There are many services provided by Firebase beside authentication.Some of them are-
                        <ul>
                            <li>Cloud Firestore.</li>
                            <li>Cloud Functions.</li>
                            <li>Hosting</li>
                            <li>Cloud Storage</li>
                            <li>Google Analytics</li>
                            <li>Predictions</li>
                            <li>Cloud Messaging.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;