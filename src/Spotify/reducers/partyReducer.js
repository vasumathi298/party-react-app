const initialState = {
    party: {},
    loading: false,
    error: null,
};

export const partyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PARTY_REQUEST':
            return { ...state, loading: true };

        case 'CREATE_PARTY_SUCCESS':
            return { ...state, loading: false, party: action.payload };

        case 'CREATE_PARTY_FAILURE':
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};
