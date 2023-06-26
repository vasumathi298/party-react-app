import axios from 'axios';
const ADMIN_API = 'http://localhost:4000/api/users';

const API_BASE = process.env.REACT_APP_API_BASE;
//const ADMIN_API = `${API_BASE}/admin`;

export const getAdminProfile = async () => {
  
  const response = await axios.get(`${ADMIN_API}/profile`,{ withCredentials: true , headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}});
    const profile = response.data;
    return profile;
   }

export const deleteEvent = async (id) => {
    const response = await axios.delete(`http://localhost:4000/api/party/${id}`)
    return response.data
  }


export const updateAdminProfile = async (profile) => {
    const response = await axios
      .put(`${ADMIN_API}/profile`, profile, { withCredentials: true , headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}});
    return profile;
  }
  
   export const getAllHostDetails = async (admin_id) => {
    const response = await axios.get(`${ADMIN_API}/getAllHostDetails`);
    //const response = await axios.get(`${ADMIN_API}/getAllHostDetails`)
    return response.data;
   }
   
   export const getAllEventDetails = async (admin_id) => {
    const response = await axios.get(`${ADMIN_API}/getAllEventDetails`)
    return response.data;
   }

   export const getAllHostComments = async (admin_id) => {
    const response = await axios.get(`${ADMIN_API}/getAllHostComments`)
    return response.data;
   }

   export const logout = async () => {
    const response = await axios.post(`${ADMIN_API}/logout`)
    return response.data;
   }