const initialState = {
    parties: [],
    loading: false,
    error: null,
    joinedParty: null,
};

export const joinReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_PARTIES_REQUEST':
        case 'JOIN_PARTY_REQUEST':
            return { ...state, loading: true };

        case 'GET_ALL_PARTIES_SUCCESS':
            return { ...state, loading: false, parties: action.payload };

        case 'JOIN_PARTY_SUCCESS':
            return { ...state, loading: false, joinedParty: action.payload };

        case 'GET_ALL_PARTIES_FAILURE':
        case 'JOIN_PARTY_FAILURE':
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};
