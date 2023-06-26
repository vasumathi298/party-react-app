import React, { useState } from 'react';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createParty } from '../actions/partyActions';
import logo from "./logo.png"
import "./style.css"



const CreateParty = () => {

    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [capacity, setCapacity] = useState('');
    const [date, setDate] = useState('');
    const [hostName, setHostName] = useState('');

    const dispatch = useDispatch();
    const partyCreation = useSelector(state => state.party);
    const { loading, error, party } = partyCreation;

    const handleSubmit = (e) => {

        e.preventDefault();
        const partyData = {

            title,

            address,

            capacity,

            date,

            hostName,

        };

        dispatch(createParty(partyData));

    };




    return (

        <>
       
        <div className="login-card-container">
      <div className="login-card">
        <div className="login-card-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="login-card-header">
          <h1>Create Party</h1>
        </div>
        <form className="login-card-form" onSubmit={handleSubmit}>
          <div className="form-item">
          <input type="text" 
                placeholder="Enter Party Title" 
                className='input-space' 
                id="title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} autoFocus required/>
            
          </div>

          <div className="form-item">  
          <input type="text" 
                placeholder="Enter the address" 
                className='input-space' 
                id="address" 
                name="address"
                value={address} 
                onChange={(e) => setAddress(e.target.value)} autoFocus required/>
          </div>

          <div className="form-item">
          <input type="number" 
                placeholder="Enter Party capacity" 
                className='input-space' 
                id="capacity" 
                name="capacity"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)} autoFocus required/>
          </div>

          <div className="form-item">
          <input type="date" 
                placeholder="Event date" 
                className='input-space' 
                id="date" 
                name="date"
                value={date} 
                onChange={(e) => setDate(e.target.value)} autoFocus required/>
            </div>

            <div className="form-item">
            <input type="text" 
                placeholder="Host Name" 
                className='input-space' 
                id="hostName" 
                name="hostName"
                value={hostName}
                onChange={(e) => setHostName(e.target.value)} autoFocus required/>
            </div>
            
            <button type="submit" className="btn btn-primary mt-2">Create Party</button>
            </form>
        
      </div>
    </div>    
        </>

    );

};


export default CreateParty;