import React from "react";
import PropTypes from "prop-types";
import "./UserDetails.css";

const UserDetails = ({ userImage, displayName, emailId }) => (
  <div className="user-details-container">
    <p className="user-name">{displayName }</p> <p className="user-name"> { emailId}</p>
  </div>
);


UserDetails.propTypes = {
  userImage: PropTypes.string,
  displayName: PropTypes.string,
  emailId: PropTypes.string
};

export default UserDetails;
