import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getAllParties, joinParty } from '../actions/joinActions';


import AppMainPage from '../../AppRouter';
import { useNavigate } from 'react-router-dom';
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

        <div className="container" style={{ marginTop: '20px' }}>

            <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Join a Party</h2>




            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>

                <input

                    style={{

                        width: '50%',

                        padding: '10px',

                        borderRadius: '5px',

                        border: '1px solid #ccc'

                    }}

                    type="text"

                    placeholder="Search..."

                    value={search}

                    onChange={(e) => setSearch(e.target.value)}

                />

            </div>




            {loading ? (

                <div>Loading...</div>

            ) : error ? (

                <div>Error: {error}</div>

            ) : (

                    <table className="table">

                        <thead>

                        <tr>

                            <th>Party Name</th>

                            <th>Host Name</th>

                            <th>Action</th>

                        </tr>

                        </thead>

                        <tbody>

                        {

                            filteredParties.map(party => (

                                <tr key={party._id}>

                                    <td>{party.title}</td>

                                    <td>{party.hostName}</td>

                               

                                    <td>

                                        <button className="btn btn-primary" onClick={() => handleJoin(party._id)}>Join</button>

                                    </td>

                                </tr>

                            ))

                        }

                        </tbody>

                    </table>

                )}

        </div>

    );

};




export default Join;