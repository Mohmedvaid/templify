import React, { useState } from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import { auth } from '../auth/firebase';

function Login() {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        // if all good sign in
        .then((auth)=>{
            history.push("/")

        })
        // else show message
        .catch((e)=> alert(e.message));

    }
    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth=>{
            history.push("/")
        })
        .catch((e)=> alert(e.message))



    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt="logo"/>
            
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                        <input value={email} onChange={event =>setEmail(event.target.value)}  type="email"/>
                    <h5>Password</h5>
                      <input value={password} onChange={event =>setPassword(event.target.value)} type="password"/>
                    <button onClick={login} className="login__signInButton" type="submit">Sign In</button>
                    <p>By siging in bla bla bla...</p>
                    <button onClick={register} className="login__registerButton">Create your account</button>

                </form>
            </div>
        </div>
    )
}

export default Login
