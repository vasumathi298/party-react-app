import React, { Component } from "react";
import PropTypes from "prop-types";
import "./UserPlaylists.css";
import { useRef } from "react";
class UserPlaylists extends Component {

  constructor(props) {
    super(props);
    this.feedbackRef = React.createRef();
    
  }

  submitFeedback = () => {
    const feedbackValue = this.feedbackRef.current.value;
    console.log(feedbackValue);
    this.props.sendFeedBack(this.props.hostName, feedbackValue);
    this.feedbackRef.current.value = '';
    // Perform any necessary actions with the feedback
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.userId !== "" && nextProps.token !== "" 
) {
      this.props.fetchPlaylistsMenu(nextProps.userId, nextProps.token);

    }
  }

  renderPlaylists() {
    return this.props.playlistMenu.map(playlist => {
      const getPlaylistSongs = () => {
        this.props.fetchPlaylistSongs(
          playlist.owner.id,
          playlist.id,
          this.props.token
        );
        this.props.updateHeaderTitle(playlist.name);
      };

     
      return (
        <li
          onClick={getPlaylistSongs}
          className={
            this.props.title === playlist.name
              ? "active side-menu-item"
              : "side-menu-item"
          }
          key={playlist.id}
        >
          {playlist.name}
        </li>
      );
    });
  }
  
  

  render() {
    const addPlaylist =()=>{
      console.log("owner id");
      console.log(this.props.userId);
      const playlistName = prompt("Enter the playlist name:");
      this.props.createPlaylist (
        this.props.userId,
        this.props.token,
        playlistName
      );
      window.location.reload();

      this.props.fetchPlaylistsMenu(this.props.userId, this.props.token);

    };
    const buttonStyle = {
      color: 'darkgrey'
    };
    this.props.getUserType(this.props.hostName);

    console.log("usertype is");
    console.log(this.props.userType.userType);
  
        
    return (
      <div className="user-playlist-container">
        <h3 className="user-playlist-header">Playlists 
        {this.props.userType.userType === 'host' &&<span className="add-icon" onClick={addPlaylist}>+</span>}
        </h3>
         {this.props.playlistMenu && this.renderPlaylists()}
         <br/>
         <br/>
         <h3 className="user-playlist-header">Feedback</h3>
      <textarea ref={this.feedbackRef} id="feedbackInput" rows="4" cols="15"></textarea>
      <br/>
      <button style={buttonStyle} onClick={this.submitFeedback}>Submit</button>
      </div>
    );
  }
}

UserPlaylists.propTypes = {
  userId: PropTypes.string,
  token: PropTypes.string,
  title: PropTypes.string,
  playlistMenu: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  fetchPlaylistsMenu: PropTypes.func,
  fetchPlaylistSongs: PropTypes.func,
  updateHeaderTitle: PropTypes.func,
  createPlaylist: PropTypes.func,
  sendFeedBack:PropTypes.func,
  hostName:PropTypes.string,
  getUserType:PropTypes.func,
  userType:PropTypes.string
};

export default UserPlaylists;