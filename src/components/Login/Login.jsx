import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Login.css'
const Login = () => {
    const location = useLocation();
    const redirect_uri = location.state?.from || '/shop'
    const history = useHistory()
    const {singInWithGoogle} = useAuth()
    const handleGoogleLogin =()=>{
        singInWithGoogle()
        .then(result =>{
           history.push(redirect_uri)
        })
    }

    console.log("came from",location.state?.from);

    return (
        <div>
            <div className="login-form">
                <form onSubmit>
                    <input type="Email" placeholder="Enter your email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Enter your password" />
                    <br />
                    <button className="button" > Log in</button>
                </form>
                <div className="btm">
                    <h2>New to site? <Link to="/register">Register</Link></h2>
                    <div>
                        <button onClick={handleGoogleLogin} className="button">Google Sign-In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;