import React, { useState } from 'react';

import { useContext } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { createParty } from '../actions/partyActions';




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

        <div className="container">

            <h2>Create Party</h2>




            <form onSubmit={handleSubmit}>

                <div className="mb-3">

                    <label htmlFor="title" className="form-label">Title</label>

                    <input

                        type="text"

                        className="form-control"

                        id="title"

                        value={title}

                        onChange={(e) => setTitle(e.target.value)}

                    />

                </div>

                <div className="mb-3">

                    <label htmlFor="address" className="form-label">Address</label>

                    <input

                        type="text"

                        className="form-control"

                        id="address"

                        value={address}

                        onChange={(e) => setAddress(e.target.value)}

                    />

                </div>

                <div className="mb-3">

                    <label htmlFor="capacity" className="form-label">Capacity</label>

                    <input

                        type="number"

                        className="form-control"

                        id="capacity"

                        value={capacity}

                        onChange={(e) => setCapacity(e.target.value)}

                    />

                </div>

                <div className="mb-3">

                    <label htmlFor="date" className="form-label">Date</label>

                    <input

                        type="date"

                        className="form-control"

                        id="date"

                        value={date}

                        onChange={(e) => setDate(e.target.value)}

                    />

                </div>

                <div className="mb-3">

                    <label htmlFor="hostName" className="form-label">Host Name</label>

                    <input

                        type="text"

                        className="form-control"

                        id="hostName"

                        value={hostName}

                        onChange={(e) => setHostName(e.target.value)}

                    />

                </div>

                <button type="submit" className="btn btn-primary">Create Party</button>

            </form>

        </div>

    );

};




export default CreateParty;