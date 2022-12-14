import React, { useState } from 'react';
import './login.css'
import { Link, useHistory } from "react-router-dom";

function Login_Entrpreneur() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src={'/images/z.png'}
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={''} className='login__signInButton'>Sign In</button>
                </form>

                <p style={{color:"#fff"}}>
                    By signing-in you agree to the ZMARTS Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={''} className='login__registerButton'>Create your E. ZMART Account </button> 
            </div>
        </div>
    )
}

export default Login_Entrpreneur