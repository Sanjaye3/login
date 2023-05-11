import React, {useEffect, useState} from "react";
import "./loginform.css"
import { NavLink } from 'react-router-dom';
import {useFormik} from "formik";


function RegisterForm() {
    const formik = useFormik({
        initialValues:{ email:"sanjaye@gmail.com",password:"abcd",name:"sanjaye"},
    })    

    return (
        <div className="cover">
            <h1>Register</h1>
            <input id="name" name="name"  value = {formik.values.name} onChange={formik.handleChange} type="text" placeholder="name" />
            <input id="email" name="email"  value = {formik.values.email} onChange={formik.handleChange} typetype="email" placeholder="email" />
            <input id="password" name="password"  value = {formik.values.password}  onChange={formik.handleChange}  type="password" placeholder="password" />
            {/* <a href="/">Login</a> */}
            <div className="nlink">
            <NavLink to="/">Already have an account?Login here.</NavLink>
            </div>
            <div className="login-btn">Register</div>

           
            
        </div>
    )
}

export default RegisterForm