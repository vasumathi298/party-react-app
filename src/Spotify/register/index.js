import React from "react";
import {useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { register } from "../services/auth-thunks";


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
        <form style={{height: '100vh', width: '100vw', backgroundColor:'black', opacity:'70%'}}>
            <div className='register-form'>
                <h1>Welcome to Spotify PartyMix</h1>
                <h3>Register as a new user</h3><br/><br/>

                <label className='register-labels' for="fname">First Name</label>
                <input type="text" 
                placeholder="Enter First Name" 
                classname='input-space' 
                id="register_fname" 
                name="ufname"
                value={firstName} 
                onChange={(event) => setFirstName(event.target.value)}></input><br/><br/>

                <label className='register-labels' for="lname">Last Name</label>
                <input type="text" 
                placeholder="Enter Last Name" 
                classname='input-space' 
                id="register_lname" 
                name="ulname"
                value={lastName} 
                onChange={(event) => setLastName(event.target.value)}></input><br/><br/>

                

                <label className='register-labels' for="uname">Username</label>
                <input type="text" 
                placeholder="Enter Username" 
                classname='input-space' 
                id="register_uname" 
                name="uname"
                value={username} 
                onChange={(event) => setUserName(event.target.value)}></input><br/><br/>

                <label className='register-labels' for="emailId">Email</label>
                <input type="email" 
                placeholder="Email" 
                classname='input-space' 
                id="register_email" 
                name="email"
                value={emailId} 
                onChange={(event) => setEmailID(event.target.value)}></input><br/><br/>

                <label className='register-labels' for="password">Password</label>
                <input type="password" 
                placeholder="Confirm Password" 
                classname='input-space' 
                id="register_password" 
                name="password"
                value={password} 
                onChange={(event) => setPassword(event.target.value)}></input><br/><br/>

<p className='register-labels'>
        Register as:
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
          value="guest"
          checked={usertype === 'guest'}
          onChange={handleUserTypeChange}
        /> Guest


        <input
          className='radio-buttons'
          type="radio"
          name="usertype"
          value="host"
          checked={usertype === 'host'} 
          onChange={handleUserTypeChange}
        /> Host
</p>
                <br/>

                <button className="button" onClick={handleRegistration} type="submit">Register</button><br/><br/>
                <p>Already attended party with us? <button onClick={navigateToLogin} className="button">Login Here</button></p>
        </div>
        </form>
    )
}

export default Register;