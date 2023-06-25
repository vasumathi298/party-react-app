import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { loginThunk } from '../services/auth-thunks';

export const Login = () => {
    const [emailId, setEmailID] = useState("");
    const [password, setPassword] = useState("");
    //const{currentUser} = useSelector((state) => state.auth);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    //console.log(currentUser);
    const navigateToRegistration = () => {
        navigate ('/register');
    }

    const handleLogin = async () => {
        try {
            await dispatch(loginThunk({ emailId, password }));
            if(emailId=== "admin@gmail.com" && password === "admin")
              navigate("/maintenance");
            else
              navigate("/home");
        } catch (e) {
            alert(e);
        }
    };
    return (
        <div>
            <h1>Login Screen</h1>
            <div className="register-form">
                <label>emailId</label>
                <input className="input-space" 
                type="text" 
                value={emailId} 
                placeholder="Enter Email"
                onChange={(event) => setEmailID(event.target.value)} />
            </div>

            <div className="mt-2">
                <label for="password">Password</label>
                <input type="password" 
                className="input-space" 
                value={password} 
                placeholder="Enter Password" 
                onChange={(event) => setPassword(event.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary mt-2" onClick={handleLogin}>Login</button>
            <p>Don't have an account? <button onClick={navigateToRegistration} className='btn btn-primary mt-2'>Register Here</button></p>
        </div>
    );
};

export default Login;
