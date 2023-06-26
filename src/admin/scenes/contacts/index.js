import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts, mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

import { getAllHostDetailsThunk } from "../../admin-thunk/admin-thunk";
import { useDispatch,useSelector  } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const  hostDetails = useSelector((state) => state.admin.allHostDetails);
  const [hosts, setHosts] = useState(hostDetails);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const admin="bob"
  //console.log("host Details:", hosts)
  
  useEffect(() => {
    async function fetchData() {
     const {payload} = await dispatch(getAllHostDetailsThunk(admin));
     setHosts(payload)
    }
fetchData();
},[]);

//console.log(mockDataContacts)
  const columns = [
    { field: "_id", headerName: "ID", flex: 0.5 },
    {
      field: "username",
      headerName: "UserName",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "firstName",
      headerName: "FirstName",
      headerAlign: "left",
      cellClassName: "name-column--cell",
    },
    {
      field: "lastName",
      headerName: "LastName",
      headerAlign: "left",
      cellClassName: "name-column--cell",
    },
    {
      field: "emailId",
      headerName: "Email",
      flex: 1,
    }
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={hostDetails}
          columns={columns}
          getRowId={(row) => row._id}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
