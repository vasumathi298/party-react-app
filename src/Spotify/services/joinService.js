import axios from 'axios';

export const getAllParties = async () => {
    const response = await axios.get(`http://localhost:4000/api/party/all`,{ withCredentials: true , headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'} });
    return response;
};

export const joinParty = async (partyId) => {
    const response = await axios.get(`http://localhost:4000/api/party/join/${partyId}`);
    return response;
};
