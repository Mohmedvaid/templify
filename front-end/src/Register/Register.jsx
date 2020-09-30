import React, { useState, useEffect } from 'react'
import './Register.css'
import {Link, useHistory} from 'react-router-dom'
import { auth, db } from '../auth/firebase';
import { useStateValue } from '../DataLayer/StateProvider'

function Register() {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [{ basket, user }] = useStateValue();


    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
           return db.collection("users").doc(auth.user.uid).set({
                First: first,
                Last: last
            }).then(()=>{
                history.push("/");
            })
        })
        .catch((e)=> alert(e.message))
    }

    return (
            <div className="register">
            <Link to="/">
                <img className="register__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt="logo"/>
            </Link>
            <div className="register__container">
                <h1>Create a new account</h1>
                <form>
                    <h5>First Name</h5>
                        <input value={first} onChange={event =>setFirst(event.target.value)}  type="text"/>
                    <h5>Last Name</h5>
                        <input value={last} onChange={event =>setLast(event.target.value)}  type="text"/>
                    <h5>E-mail</h5>
                        <input value={email} onChange={event =>setEmail(event.target.value)}  type="email"/>
                    <h5>Password</h5>
                      <input value={password} onChange={event =>setPassword(event.target.value)}  type="password"/>
                    <p>By siging in bla bla bla...</p>
                    <Link to="/register">
                        <button onClick={register} className="register__registerButton">Create your account</button>
                    </Link>
                    <div className="register__bottom">
                        <small>or</small>
                        <Link to="/">
                            <p>Back to homepage</p>
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Register
