import React from "react";
import PropTypes from "prop-types";
import "./UserDetails.css";

const UserDetails = ({ userImage, displayName, emailId,userType }) => (
  <div className="user-details-container">
      <p className="user-name">{displayName}'s Party</p>
  {userType === 'host' && (
  <>
    <p className="user-name">{emailId}</p>
  </>
)}
  </div>
);


UserDetails.propTypes = {
  userImage: PropTypes.string,
  displayName: PropTypes.string,
  emailId: PropTypes.string,
  userType: PropTypes.string
};

export default UserDetails;
