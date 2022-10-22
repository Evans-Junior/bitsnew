import React, { useState } from 'react';
import './login.css'
import { Link, useHistory } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";

  import { auth } from "../../firebase";

function Login() {
    const history = useHistory();
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
  
    const [user, setUser] = useState({});
  
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
      };

      const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
          );
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
      };

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

                <form onSubmit={'login'}>
                    <h5>E-mail</h5>
                    <input type='text'  onChange={e => setLoginEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' onChange={e => setLoginPassword(e.target.value)} />

                    <button type='submit' onClick={''} className='login__signInButton'>Sign In</button>
                </form>

                <p style={{color:"#fff"}}>
                    By signing-in you agree to the ZMARTS Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={''} className='login__registerButton'>Create your ZMART Account </button> 
                <Link to='/entrpreneurlogin'><button className='login__registerButton'>I am an Entrepreneur </button></Link> 
            </div>
        </div>
    )
}

export default Login