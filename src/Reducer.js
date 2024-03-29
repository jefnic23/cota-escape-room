const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ASLEEP':
            return { ...state, asleep: action.payload };
        case 'SET_AWAKE':
            return { ...state, awake: action.payload };
        case 'SET_STARTED':
            return { ...state, started: action.payload };
        case 'SET_PASSWORD':
            return { ...state,  password: action.payload };
        case 'SET_INDEX':
            return { ...state, index: action.payload };
        case 'SET_ANSWERS':
            return { ...state, answers: action.payload };
        case 'SET_QUESTIONS':
            return { ...state, questions: action.payload };
        case 'SET_AUDIO':
            return { ...state, audio: action.payload };
        case 'SET_PLAYING':
            return { ...state, playing: action.payload };
        case 'SET_PROGRESS':
            return { ...state, progress: action.payload };
        case 'SET_ESCAPED':
            return { ...state, escaped: action.payload };
        default:
            return state;
    }
};

export default Reducer;
