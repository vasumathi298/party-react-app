import { createParty as createPartyAPI } from '../services/partyService';

export const createParty = (partyData) => async (dispatch) => {
    dispatch({ type: 'CREATE_PARTY_REQUEST' });

    try {
        const response = await createPartyAPI(partyData);
        dispatch({
                     type: 'CREATE_PARTY_SUCCESS',
                     payload: response.data
                 });
    } catch (error) {
        dispatch({
                     type: 'CREATE_PARTY_FAILURE',
                     payload: error.response ? error.response.data : error.message,
                 });
    }
};
