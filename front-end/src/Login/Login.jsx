import React, { useState, useEffect } from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import { auth, db } from '../auth/firebase';
import { useStateValue } from '../DataLayer/StateProvider'

function Login() {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [{ basket, user }, dispatch] = useStateValue();
    

    const login = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        // if all good sign in
        .then((auth)=>{
            history.push("/");

            // get user info from db and save in state
            db.collection("users").doc(auth.user.uid).get()
            .then((userInfo) => {
                dispatch({
                    type:'SET_USER',
                    user: {
                        ...user,
                        First: userInfo.data().First, 
                        Last: userInfo.data().Last
                    }
                })
            })
            .catch((err)=>{
                console.log(err);
            })
        })
        // else show message
        .catch((e)=> alert(e.message));

    }


    return (
        <div className="login">
            <div className="login__logo">
            <Link to="/">
                <img className="login__logoImg" src="/logo/templify_logo_v2.svg" alt="logo"/>
            </Link>
            </div>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                        <input value={email} onChange={event =>setEmail(event.target.value)}  type="email"/>
                    <h5>Password</h5>
                      <input value={password} onChange={event =>setPassword(event.target.value)} type="password"/>
                    <button onClick={login} className="login__signInButton" type="submit">Sign In</button>
                    <p>By siging in bla bla bla...</p>
                    
                    <Link to="/register">
                        <button className="login__registerButton" >Create your account</button>
                    </Link>

                </form>
            </div>
        </div>
    )
}

export default Login
