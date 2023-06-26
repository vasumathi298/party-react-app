import { getAllParties as getAllPartiesAPI, joinParty as joinPartyAPI } from '../services/joinService';

export const getAllParties = () => async (dispatch) => {
    dispatch({ type: 'GET_ALL_PARTIES_REQUEST' });

    try {
        const response = await getAllPartiesAPI();
        dispatch({
                     type: 'GET_ALL_PARTIES_SUCCESS',
                     payload: response.data
                 });
    } catch (error) {
        dispatch({
                     type: 'GET_ALL_PARTIES_FAILURE',
                     payload: error.response ? error.response.data : error.message,
                 });
    }
};

export const joinParty = (partyId) => async (dispatch) => {
    dispatch({ type: 'JOIN_PARTY_REQUEST' });

    try {
        const response = await joinPartyAPI(partyId);
        dispatch({
                     type: 'JOIN_PARTY_SUCCESS',
                     payload: response.data
                 });
    } catch (error) {
        dispatch({
                     type: 'JOIN_PARTY_FAILURE',
                     payload: error.response ? error.response.data : error.message,
                 });
    }
};
