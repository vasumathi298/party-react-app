import { Box, Button } from "@mui/material";
//import { tokens } from "../../../theme.js";

import Header from "../../components/Header.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from 'react-redux'
import { getAdminProfileThunk, updateAdminProfileThunk, logoutThunk } from "../../admin-thunk/admin-thunk.js";

const Profile = () => {

  const [image, setImage] = useState("");

  const  currentUser  = useSelector((state) => state.admin.currentUser);
  const [adminProfile, setAdminProfile] = useState(currentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
     const {payload} = await dispatch(getAdminProfileThunk());
     setAdminProfile(payload)
    }
fetchData();
},[]);
  
  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(imageFile);
    }
  };

  const save = () => { dispatch(updateAdminProfileThunk(adminProfile)); };

  const handleLogout = () => {
    // Handle logout logic here
    try {
      dispatch(logoutThunk());
     
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
        <input id="firstname" value={`${adminProfile.firstname}`} onChange={(event) => {
        const newProfile = {
         ...adminProfile, firstname: event.target.value,
        };
        setAdminProfile(newProfile);
       }} style={{ flex: 1, fontSize: '16px', marginLeft: '10px', border: '1px solid black', padding: '5px'}} />
      </Box>
  
      <Box marginBottom="10px" display="flex" alignItems="center">
        <label htmlFor="lastname" style={{ width: '100px' }}>Lastname</label>
        <input id="lastname" value={`${adminProfile.lastname}`} onChange={(event) => {
        const newProfile = {
         ...adminProfile, lastname: event.target.value,
        };
        setAdminProfile(newProfile);
       }} style={{ flex: 1, fontSize: '16px', marginLeft: '10px', border: '1px solid black', padding: '5px'  }} />
      </Box>
  
      <Box marginBottom="10px" display="flex" alignItems="center">
        <label htmlFor="email" style={{ width: '100px' }}>Email</label>
        <input id="email" value={`${adminProfile.email}`} onChange={(event) => {
        const newProfile = {
         ...adminProfile, email: event.target.value,
        };
        setAdminProfile(newProfile);
       }}style={{ flex: 1, fontSize: '16px', marginLeft: '10px', border: '1px solid black', padding: '5px' }} />
      </Box>
    
      <Box marginBottom="10px" display="flex" alignItems="center">
        <label htmlFor="location" style={{ width: '100px' }}>Location</label>
        <input id="location" value={`${adminProfile.location}`} onChange={(event) => {
        const newProfile = {
         ...adminProfile, location: event.target.value,
        };
        setAdminProfile(newProfile);
       }}style={{ flex: 1, fontSize: '16px', marginLeft: '10px', border: '1px solid black', padding: '5px' }} />
      </Box>
      <Box className="mt-2">
          
          <Box marginBottom="10px" display="flex" alignItems="center">
          <label>Image</label>
            <input
              type="file"
              className="form-control"
              id="file-upload"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ marginLeft: '10px', marginTop: '5px' }}
            />
            </Box>
            {image && <img src={image} alt="Preview" style={{ marginLeft: '10px', maxWidth: '100%', height: 'auto' }} />}
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
