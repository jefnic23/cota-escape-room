const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ASLEEP':
            return {
                ...state,
                asleep: action.payload
            };
        case 'SET_STARTED':
            return {
                ...state,
                started: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;
