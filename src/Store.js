import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const initialState = {
    asleep: false,
    awake: false,
    started: false,
    password: "",
    audio: "",
    playing: false,
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