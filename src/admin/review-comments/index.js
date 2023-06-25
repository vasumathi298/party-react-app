import { Box, useTheme } from "@mui/material";
import Header from "../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../theme";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from 'react-redux'
import { getAllHostCommentsThunk } from "../admin-thunk/admin-thunk.js";

const Comments = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const comments = useSelector(state => state.admin.hostComments)
  const [commentsList, setCommentsList] = useState(comments);
 const admin = "bob"
 const dispatch = useDispatch();
 useEffect(() => {
  async function fetchData() {
   const {payload} = await dispatch(getAllHostCommentsThunk(admin));
   setCommentsList(payload)
  }
fetchData();
},[]);

 //console.log(commentsList)

  return (
    <Box m="20px">
      <Header title="Comments" subtitle="Feedback from the Hosts" />
      { commentsList.map((commentBody, index) => (
        <Accordion key={index} defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            {commentBody.hostName}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {commentBody.comment}
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))}
  
      
    </Box>

  );
};

export default Comments;
