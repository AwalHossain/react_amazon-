import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <h2>Create account</h2>
            <form onSubmit>
            <input type="Email" placeholder="Enter your email" />
            <input type="Email" placeholder="Enter your name" />
                    <br />
                    <input type="password" name="" id="" placeholder="Enter your password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter your passswrod" />
                    <br />
                    <button className="button" > Log in</button>
            </form>
            <div className="btm">
                    <h4>Already register? <Link to="/login">Log In</Link></h4>
                    <div>
                        <button className="button">Google Sign-In</button>
                    </div>
                </div>
        </div>
    );
};

export default Register;