import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
    const navigate = useNavigate();
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('')

        function signIn(e) {
            e.preventDefault();
            //firebase login
            signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate("/")
            })
            .catch(error => alert(error.message))
        }

    function register(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            if (auth) {
                navigate("/")
            }
        })
        .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to="/">
            <img 
                className='login__logo'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                alt="login"
            />
        </Link>

        <div className="login__container">
            <h1>Sign-in</h1>
            
            <form>
                <h5>E-mail</h5>
                <input 
                    type="text" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                />

                <h5>Password</h5>
                <input 
                    type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                />
            
                <button 
                    className='login__signInButton'
                    type='submit'
                    onClick={signIn}
                >
                    Sign-in
                </button>

            </form>

            <p>
                By signing-in, you agree to AMAZON CLONE's Conditions of Use & Sale. Please see out Privacy Notice, our Cookies Notice and our Intrest-Based Ads
            </p>

            <button 
                className='login__registerButton'
                onClick={register}
            >
                Create your Amazon account
            </button>
        </div>
    </div>
  )
}
