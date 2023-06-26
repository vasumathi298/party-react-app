import { Box, Button } from "@mui/material";
//import { tokens } from "../../../theme.js";

import Header from "../../components/Header.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from 'react-redux'
import { getAdminProfileThunk, updateAdminProfileThunk, logoutThunk } from "../../admin-thunk/admin-thunk.js";

const Profile = () => {
  //console.log("Inside Profile component")

  const  currentUser  = useSelector((state) => state.admin.currentUser);
  const [adminProfile, setAdminProfile] = useState(currentUser);
  console.log("the currentUser", currentUser)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
     const {payload} = await dispatch(getAdminProfileThunk());
     setAdminProfile(payload)
    }
fetchData();
},[]);
  console.log("adminProfile", adminProfile)
  
  const save = () => { dispatch(updateAdminProfileThunk(adminProfile)); };

  const handleLogout = () => {
    // Handle logout logic here
    try {
      dispatch(logoutThunk());
      navigate("/Spotify/create-party")
     
   } catch (e) {
     alert(e);
   }
  
  };

  return (
    <Box m="20px">
    {/* HEADER */}
    <Box display="flex" flexDirection="column" alignItems="flex-start" marginBottom="20px">
      <Header title="Profile" subtitle="Edit your profile" />
    </Box>
  
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <Box marginBottom="10px" display="flex" alignItems="center">
        <label htmlFor="firstname" style={{ width: '100px' }}>Firstname</label>
        <input id="firstname" value={adminProfile.firstName} onChange={(event) => {
        const newProfile = {
         ...adminProfile, firstName: event.target.value,
        };
        setAdminProfile(newProfile);
       }} style={{ flex: 1, fontSize: '16px', marginLeft: '10px', border: '1px solid black', padding: '5px'}} />
      </Box>
  
      <Box marginBottom="10px" display="flex" alignItems="center">
        <label htmlFor="lastname" style={{ width: '100px' }}>Lastname</label>
        <input id="lastname" value={adminProfile.lastName} onChange={(event) => {
        const newProfile = {
         ...adminProfile, lastName: event.target.value,
        };
        setAdminProfile(newProfile);
       }} style={{ flex: 1, fontSize: '16px', marginLeft: '10px', border: '1px solid black', padding: '5px'  }} />
      </Box>
  
      <Box marginBottom="10px" display="flex" alignItems="center">
        <label htmlFor="email" style={{ width: '100px' }}>Email</label>
        <input id="email" value={adminProfile.emailId} onChange={(event) => {
        const newProfile = {
         ...adminProfile, emailId: event.target.value,
        };
        setAdminProfile(newProfile);
       }}style={{ flex: 1, fontSize: '16px', marginLeft: '10px', border: '1px solid black', padding: '5px' }} />
      </Box>
    
      <Box marginBottom="10px" display="flex" alignItems="center">
        <label htmlFor="username" style={{ width: '100px' }}>UserName</label>
        <input id="username" value={adminProfile.username} onChange={(event) => {
        const newProfile = {
         ...adminProfile, username: event.target.value,
        };
        setAdminProfile(newProfile);
       }}style={{ flex: 1, fontSize: '16px', marginLeft: '10px', border: '1px solid black', padding: '5px' }} />
      </Box>
      

        <Box display="flex" justifyContent="flex-end" marginTop="20px">
          <Button variant="contained" color="secondary" onClick={save} style={{ marginRight: '10px' }}>
            Save
          </Button>
          <Button variant="contained" color="primary" style={{ backgroundColor: 'red' }} onClick={handleLogout}>
            Logout
          </Button>
        </Box>
    </Box>
  </Box>
  
  );
};

export default Profile;
