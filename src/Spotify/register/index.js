import React from "react";
import {useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { register } from "../services/auth-thunks";
import logo from "./logo.png"
import "./style.css" 

export const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [emailId, setEmailID] = useState("");
    const [password, setPassword] = useState("");
    const [usertype, setUserType] = useState(""); // Initialize usertype state const handleUserTypeChange = (e) => { setUserType(e.target.value); // Update usertype state with selected value };
    const handleUserTypeChange = (e) => { setUserType(e.target.value);
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const navigateToLogin = () => {
        navigate('/login');
    };


    const handleRegistration = async () => {
        try {
            await dispatch(register({ firstName, lastName, username, emailId, password, usertype}));
            navigate("/home");
        } catch (e) {
            alert(e);
        }
    };

    return(

        <>
        <div className="login-card-container">
      <div className="login-card">
        <div className="login-card-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="login-card-header">
          <h1>Spotify X PartyMix</h1>
          <h3>Register as a new user</h3>
        </div>
        <form className="login-card-form">
          <div className="form-item">
          <input type="text" 
                placeholder="Enter First Name" 
                className='input-space' 
                id="register_fname" 
                name="ufname"
                value={firstName} 
                onChange={(event) => setFirstName(event.target.value)} autoFocus required/>
            
          </div>
          <div className="form-item">
            
          <input type="text" 
                placeholder="Enter Last Name" 
                className='input-space' 
                id="register_lname" 
                name="ulname"
                value={lastName} 
                onChange={(event) => setLastName(event.target.value)} autoFocus required/>

          </div>

          <div className="form-item">
            
          <input type="text" 
                placeholder="Enter Username" 
                className='input-space' 
                id="register_uname" 
                name="uname"
                value={username} 
                onChange={(event) => setUserName(event.target.value)} autoFocus required/>
            
          </div>

          <div className="form-item">
            
          <input type="email" 
                placeholder="Email" 
                className='input-space' 
                id="register_email" 
                name="email"
                value={emailId} 
                onChange={(event) => setEmailID(event.target.value)} autoFocus required/>
              
            </div>

            <div className="form-item">
            
            <input type="password" 
                placeholder="Confirm Password" 
                className='input-space' 
                id="register_password" 
                name="password"
                value={password} 
                onChange={(event) => setPassword(event.target.value)} autoFocus required/>
            </div>
            <div className="form-item user-role">
            <span className="role">Role:</span>
<input
          className='radio-buttons'
          type="radio"
          name="usertype"
          value="maintainance"
          checked={usertype === 'maintainance'}
          onChange={handleUserTypeChange} 
        /> Maintainance


        <input
          className='radio-buttons'
          type="radio"
          name="usertype"
          value="host"
          checked={usertype === 'host'} 
          onChange={handleUserTypeChange}
        /> Host
            </div>

          <button className="btn btn-primary mt-2" onClick={handleRegistration} type="submit">Register</button>
            </form>
        <div className="login-card-footer">
        <p>Already attended party with us? <button onClick={navigateToLogin} className="btn btn-primary mt-2">Login Here</button></p>
       </div>
      </div>
    </div>    
    
        </>
        
        )
}

export default Register;
