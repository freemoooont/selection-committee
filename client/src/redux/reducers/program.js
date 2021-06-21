const initialState = {
    items: [],
    errors: [],
    isLoaded: false,
};

const program = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PROGRAM':
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            };

        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            };

        default:
            return state;
    }
};

export default program;