import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../Store';
import Container from './Container';
import Home from './Home';
import Password from './Password';

export default function Main() {
    const [animation, setAnimation] = useState("animate__fadeIn");
    const [state, dispatch] = useContext(Context);

    useEffect(() => {
        window.addEventListener('keyup', (ev) => {
            if (ev.key === " " && state.asleep) {
                ev.preventDefault();
                dispatch({ type: 'SET_ASLEEP', payload: false });
                dispatch({ type: 'SET_STARTED', payload: true });
                setAnimation("animate__fadeIn");
            }
        })
    }, [state, dispatch])

    const sleep = () => {
        setAnimation("animate__fadeOut");
        setTimeout(() => {
            dispatch({ type: 'SET_ASLEEP', payload: true});
        }, 500);
    }

    return (
        <Container animation={animation}>
            {!state.asleep && !state.started && <Home sleep={sleep} />} 
            {!state.asleep && state.started && <Password />}
        </Container>
    )
}