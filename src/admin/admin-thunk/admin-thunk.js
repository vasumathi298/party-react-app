import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./services.js";


export const getAdminProfileThunk = createAsyncThunk(
    "admin/getAdminProfile",
    async () => await service.getAdminProfile()
   );
   
   export const deleteEventThunk = createAsyncThunk(
       'admin/deleteEvent',
       async (pid) => {
         await service.deleteEvent(pid)
         return pid
     })
   
   export const updateAdminProfileThunk = createAsyncThunk(
       'admin/updateAdminProfile',
       async (profile) => {
        await service.updateAdminProfile(profile)
     })
   
   export const getAllHostDetailsThunk =
     createAsyncThunk(
       'admin/getAllHostDetails',
       async (admin_id) =>{
        const hostDetails = await service.getAllHostDetails(admin_id)
        return hostDetails
       })

    export const getAllEventDetailsThunk =
       createAsyncThunk(
         'admin/getAllEventDetails',
         async (admin_id) =>{
          const eventDetails = await service.getAllEventDetails(admin_id)
          return eventDetails
         })
    
    export const getAllHostCommentsThunk =
         createAsyncThunk(
           'admin/getAllHostComments',
           async (admin_id) =>{
            const hostComments = await service.getAllHostComments(admin_id)
            return hostComments
           })

    export const logoutThunk =
           createAsyncThunk(
             'admin/logout',
             async (admin_id) =>{
              await service.logout(admin_id)
             })