export const fetchUserSuccess = (user) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    user
  };
};

export const fetchUserTypeSuccess =(userType) =>{
  return {
    type :'FETCH_USER_TYPE_SUCCESS',
    userType
  };
}

export const fetchUserError = () => {
  return {
    type: 'FETCH_USER_ERROR'
  };
};

export const fetchUser = (accessToken) => {

  return dispatch => {
    const request = new Request('https://api.spotify.com/v1/me', {
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken
      }),
      
    });

    fetch(request).then(res => {
      // send user back to homepage if no token
      if(res.statusText === "Unauthorized") {
        window.location.href = './';
      }
      return res.json();
    }).then(res => {
      console.log("user details");
      console.log(res);
      dispatch(fetchUserSuccess(res));
    }).catch(err => {
      dispatch(fetchUserError(err));
    });
  };
};

export const addSongToLibrarySuccess = (songId) => {
  return {
    type: 'ADD_SONG_TO_LIBRARY_SUCCESS',
    songId
  };
};

export const addSongToLibraryError = () => {
  return {
    type: 'ADD_SONG_TO_LIBRARY_ERROR'
  };
};

export const addSongToLibrary = (accessToken, id) => {

  return dispatch => {

    const request = new Request(`https://api.spotify.com/v1/me/tracks?ids=${id}`, {
      method: 'PUT',
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken
      })
    });

    fetch(request).then(res => {
      if(res.ok) {
        dispatch(addSongToLibrarySuccess(id));
      }
    }).catch(err => {
      dispatch(addSongToLibraryError(err));
    });
  };
};

export const addSongToPlaylist = (accessToken, playListId, songId) => {
  return  (dispatch) => {
   
      const request = new Request(
        `https://api.spotify.com/v1/playlists/${playListId}/tracks`,
        {
          method: 'POST',
          headers: new Headers({
            Authorization: 'Bearer ' + accessToken,
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify({
            uris: [songId],
            position: 0,
          }),
        }
      );

      fetch(request).then(res => {
        return res.json();
      }
      ).then(res=>{
        console.log(res);

      }).catch((error) => {
        // error is the <reason> of the promise 
        console.error(error)
     }) 
    
  };
};

export const getUserType = (hostName) => {
  return dispatch => {
    const request = new Request(`http://localhost:4000/api/users/usertype/${hostName}`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    fetch(request)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('get user type failed');
        }
      })
      .then(res => {
        // Handle successful playlist creation
        console.log('feedback created:', res.userType);
        dispatch(fetchUserTypeSuccess(res));

        return res.userType;
        // Dispatch any necessary actions or update the state as needed

      })
      .catch(err => {
        // Handle error
        console.error('Error submitting feedback:', err);
        // Dispatch any error actions or display an error message
      });
  };
};

