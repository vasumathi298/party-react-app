import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllParties, joinParty } from '../actions/joinActions';
import AppMainPage from '../../AppRouter';
import { useNavigate } from 'react-router-dom';
import logo from "./logo.png"

const Join = () => {

    const dispatch = useDispatch();
    const partyList = useSelector(state => state.joinPartyRed);
    const { loading, error, parties } = partyList;
    const navigate= useNavigate();
    const [search, setSearch] = useState('');

    useEffect(() => {

        dispatch(getAllParties());

    }, [dispatch]);


    const handleJoin = (id) => {
        console.log(id)
        dispatch(joinParty(id));
        navigate("/callback");


    };

    const filteredParties = parties.filter(party =>
                                               party.title.toLowerCase().includes(search.toLowerCase())

    );

    return (
        <>
        
        <form>
        <div className="login-card-container">
      <div className="login-card">
        <div className="login-card-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="login-card-header">
          <h1>Join a Party</h1>
        </div>
        <form className="login-card-form">
          <div className="form-item">

 
          <input type="text" 
                placeholder="Search..." 
                classname='input-space' 
                id="search-home" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} autoFocus/>
            
          </div>

            {loading ? (

<div>Loading...</div>

) : error ? (

<div>Error: {error}</div>

) : (
    <table className="table">
        <thead>
        <tr>
            <th className="th-centered-header">Party Name</th>
            <th className="th-centered-header">Host Name</th>
            <th className="th-centered-header-action">Action</th>
        </tr>
        </thead>
        <tbody>
        {
            filteredParties.map(party => (
                <tr key={party._id}>
                    <td>{party.title}</td>
                    <td>{party.hostName}</td>
                    <td>
                        <button className="btn btn-primary mt-2" onClick={() => handleJoin(party._id)}>Join</button>
                    </td>
                </tr>
            ))
        }
        </tbody>
    </table>
)}
            
            
            </form>
        
      </div>
    </div>    
    </form>

        </>
    );

};

export default Join;