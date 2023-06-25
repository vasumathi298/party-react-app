import UserPlaylists from "./component";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPlaylistsMenu, fetchPlaylistSongs, createPlaylist, sendFeedBack } from '../../actions/playlistActions';
import { updateHeaderTitle } from '../../actions/uiActions';

const mapStateToProps = (state) => {

	return {
		userId: state.userReducer.user ? state.userReducer.user.id : '',
		playlistMenu: state.playlistReducer.playlistMenu ? state.playlistReducer.playlistMenu : '',
		token: state.tokenReducer.token ? state.tokenReducer.token : '',
		title: state.uiReducer.title,
		userType: state.userType ? state.userType: '',
		hostName: state.userReducer.user ? state.userReducer.user.display_name :''
	};

};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators({
		fetchPlaylistsMenu,
		fetchPlaylistSongs,
		updateHeaderTitle,
		createPlaylist,
		sendFeedBack

	}, dispatch);

};
export default connect(mapStateToProps, mapDispatchToProps)(UserPlaylists);
