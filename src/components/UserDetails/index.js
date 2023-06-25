import UserDetails from "./component";
import { connect } from "react-redux";

const mapStateToProps = (state) => {

	return {
		displayName: state.userReducer.user ? state.userReducer.user.display_name : '',
		userImage: state.userReducer.user && state.userReducer.user.images[0] ? state.userReducer.user.images[0].url : '',
		emailId: state.userReducer.user? state.userReducer.user.email : '',
		userType: state.userReducer.userType? state.userReducer.userType.userType :'',
	};

};


export default connect(mapStateToProps)(UserDetails);
