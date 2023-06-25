import { createSlice } from "@reduxjs/toolkit";
//import tuits from './tuits.json';
import { updateAdminProfileThunk, getAdminProfileThunk, getAllEventDetailsThunk, getAllHostCommentsThunk, getAllHostDetailsThunk, deleteEventThunk, logoutThunk } from "../admin-thunk/admin-thunk.js";

const authSlice = createSlice({
    name: "admin",
    initialState: { currentUser: {firstname:"", lastname: "", email: "", location:""}, 
                eventDetails:[], 
                hostComments:[], 
                allHostDetails: [] },
    reducers: {},
    extraReducers: {
      [updateAdminProfileThunk.fulfilled]: (state, { payload }) => {
        state.currentUser = payload;
      },
   [logoutThunk.fulfilled]: (state) => {
       state.currentUser = null;
     },
     [getAdminProfileThunk.fulfilled]: (state, { payload }) => {
       state.currentUser = payload;
     },
     [getAllEventDetailsThunk.fulfilled]: (state, { payload }) => {
       state.eventDetails = payload;
     },
     [getAllHostCommentsThunk.fulfilled]: (state, { payload }) => {
       state.hostComments = payload;
     },
     [getAllHostDetailsThunk.fulfilled]: (state, { payload }) => {
        state.allHostDetails = payload;
      },
      [deleteEventThunk.fulfilled]: (state, { payload }) => {
        state.eventDetails = state.eventDetails .filter(t => t.pid !== payload)
      },
    },
   });
   export default authSlice.reducer;