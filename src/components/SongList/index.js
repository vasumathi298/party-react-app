import SongList from "./component";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSongs,displayPlaylist,deleteSongFromPlaylist } from '../../actions/songActions';
import { addSongToLibrary, addSongToPlaylist } from '../../actions/userActions';
import { fetchPlaylistsMenu } from "../../actions/playlistActions";
const mapStateToProps = (state) => {

  return {
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
    songs: state.songsReducer.songs ? state.songsReducer.songs : '',
    fetchSongsError: state.songsReducer.fetchSongsError,
    fetchSongsPending: state.songsReducer.fetchSongsPending,
    fetchPlaylistSongsPending: state.songsReducer.fetchPlaylistSongsPending,
    songPlaying: state.songsReducer.songPlaying,
    songPaused: state.songsReducer.songPaused,
    songId: state.songsReducer.songId,
    songAddedId: state.userReducer.songId || '',
    viewType: state.songsReducer.viewType,
    userId: state.userReducer.user ? state.userReducer.user.id : '',
    playlistMenu: state.playlistReducer.playlistMenu ? state.playlistReducer.playlistMenu : '',
  };

};

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    fetchSongs,
    addSongToLibrary,
    displayPlaylist,
    fetchPlaylistsMenu,
    addSongToPlaylist,
    deleteSongFromPlaylist,
  }, dispatch);

};
export default connect(mapStateToProps, mapDispatchToProps)(SongList);