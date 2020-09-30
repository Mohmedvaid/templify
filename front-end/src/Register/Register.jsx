import React from 'react'
import './Register.css'
import {Link, useHistory} from 'react-router-dom'

function Register() {
    return (
            <div className="register">
            <Link to="/">
                <img className="register__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt="logo"/>
            </Link>
            <div className="register__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                        <input  type="email"/>
                    <h5>Password</h5>
                      <input   type="password"/>
                    <button  className="register__signInButton" type="submit">Sign In</button>
                    <p>By siging in bla bla bla...</p>
                    <Link to="/register">
                        <button className="register__registerButton">Create your account</button>
                    </Link>

                </form>
            </div>
        </div>
    )
}

export default Register
