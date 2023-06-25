import { combineReducers } from "redux";
import userReducer from './userReducer';
import tokenReducer from './tokenReducer';
import playlistReducer from './playlistReducer';
import songsReducer from './songsReducer';
import albumsReducer from './albumsReducer';
import artistsReducer from './artistsReducer';
import uiReducer from './uiReducer';
import browseReducer from './browseReducer';
import soundReducer from './soundReducer';
import { joinReducer } from "../Spotify/reducers/joinReducer";
import { partyReducer } from "../Spotify/reducers/partyReducer";
import adminReducer from "../admin/admin-reducers/reducers"
export default combineReducers({
  userReducer,
  tokenReducer,
  playlistReducer,
  songsReducer,
  albumsReducer,
  artistsReducer,
  uiReducer,
  browseReducer,
  soundReducer,
  party: partyReducer,
  joinPartyRed: joinReducer, // Add the join party reducer
});
