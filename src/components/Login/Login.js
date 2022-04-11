import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" required />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to ema-john? <Link className='form-link' to='/signup'>Create an account</Link>
                </p>
                <div className="or-line">
                    <div className='line'>
                        <hr />
                    </div>
                    <p>or</p>
                    <div className='line'>
                        <hr />
                    </div>
                </div>
                <button className='google-btn'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" />
                    <p>Continue With Google</p>
                </button>
            </div>

        </div>
    );
};

export default Login;