import axios from 'axios';


export const createParty = async (partyData) => {
    const response = await axios.post(`http://localhost:4000/api/party/create`, partyData);
    console.log(response);
    return response.data;
};
