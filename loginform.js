import React, {useEffect, useState} from "react";
import "./loginform.css";
import { NavLink } from 'react-router-dom';

function LoginForm() {
    

    return (
        <div className="cover">
            <h1>Login</h1>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            {/* <a href="/register">register</a */}
            <div className="nlink">
            <NavLink to="/register">Don't have an account?Sign up here.</NavLink>
            </div>
            <div className="login-btn"  >Login</div>

           
            
        </div>
    )
}

export default LoginForm