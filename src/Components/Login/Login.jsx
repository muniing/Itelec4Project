import React, { useState } from "react"
import './Login.css'
import user_icon from '../Assests/person.png'
import email_icon from '../Assests/email.png'
import password_icon from '../Assests/password.png'
import { Link, useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();
    
    const handleCreateAccountClick = () => {
        console.log("Create Account Clicked");
        history.push("/signup");
    };

    const handleExistingAccountClick = () => {
        console.log("Existing Account Clicked");
        history.push("/login");
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="input">
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder="Password"/>
                </div>
                <div className="create_account">Create Account? <span>Click here!</span></div>
                
                <div className="submit_container">
                    <div className="submit">Login</div>
                </div>
            </div>


        </div>
    
        
    )
}

export default Login;