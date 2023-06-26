import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { loginThunk } from '../services/auth-thunks';

import logo from "./logo.png"
import "./style.css"

export const Login = () => {
    const [emailId, setEmailID] = useState("");
    const [password, setPassword] = useState("");
    //const{currentUser} = useSelector((state) => state.auth);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    //console.log(currentUser);
    const navigateToRegistration = () => {
      console.log("in the registre")
        navigate ('/register');
    }

    const handleLogin = async () => {
        try {
          console.log("in the login")
            const user = dispatch(loginThunk({ emailId, password }))
            console.log(user)
            if(emailId=== "admin@gmail.com" && password === "admin"){
               navigate("/maintenance/");
               console.log("redirecting to maintenance")
             }
             
        } catch (e) {
          alert(e);
        }
    };
    return (
        <>
        <div className="login-card-container">
      <div className="login-card">
        <div className="login-card-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="login-card-header">
          <h1>Sign In</h1>
          <div>Please login to use the platform</div>
        </div>
        <form className="login-card-form">
          <div className="form-item">
            
            <input className="input-space" 
                type="text" 
                value={emailId} 
                placeholder="Enter Email"
                onChange={(event) => setEmailID(event.target.value)} autoFocus required/>
            
          </div>
          <div className="form-item">
            
            <input type="password" 
                className="input-space" 
                value={password} 
                placeholder="Enter Password" 
                onChange={(event) => setPassword(event.target.value)} required/>
            
          </div>
          
          <button type="submit" className="btn btn-primary mt-2" onClick={handleLogin}>Login Button</button>
            </form>
        <div className="login-card-footer">
        <p>Don't have an account? <button onClick={navigateToRegistration} className='btn btn-primary mt-2'>Register Here</button></p>
        </div>
      </div>
    </div>    
        </>
        
    );
};

export default Login;
