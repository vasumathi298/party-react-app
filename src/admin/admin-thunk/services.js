import axios from 'axios';
const ADMIN_API = 'http://localhost:4000/api/users';

const API_BASE = process.env.REACT_APP_API_BASE;
//const ADMIN_API = `${API_BASE}/admin`;

export const getAdminProfile = async () => {
  
  const response = await axios.get(`${ADMIN_API}/profile`);
    //const response = await axios.get(`${ADMIN_API}/profile`);
    const profile = response.data;
    return profile;
   }

export const deleteEvent = async (pid) => {
    const response = await axios.delete(`http://localhost:4000/api/party/${pid}`)
    return response.data
  }


export const updateAdminProfile = async (profile) => {
    const response = await axios
      .put(`${ADMIN_API}/current`, profile);
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
    //const response2 = await axios.get("https://5ada-73-51-187-175.ngrok-free.app/api/party/all")
    //console.log(response2)
    return response.data;
   }

   export const logout = async (admin_id) => {
    const response = await axios.delete(`${ADMIN_API}/logout`)
    return response.data;
   }