import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

import Clips from './assets/Clips';
import { shuffleArray } from './utils/MakeGame';

const initialState = {
    asleep: false,
    awake: false,
    started: false,
    password: "",
    index: 0,
    answers: shuffleArray(Object.keys(Clips)),
    questions: [],
    audio: "",
    playing: false,
    progress: 0,
    escaped: false,
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext();
export default Store;
