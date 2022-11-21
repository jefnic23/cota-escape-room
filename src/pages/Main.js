import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../Store';
import Container from '../components/Container';
import Home from './Home';
import Password from './Password';
import Quiz from './Quiz';


export default function Main() {
    const [animation, setAnimation] = useState("animate__fadeIn");
    const [state, dispatch] = useContext(Context);

    useEffect(() => {
        if (state.asleep) {
            window.addEventListener('keyup', (ev) => {
                if (ev.key === " ") {
                    ev.preventDefault();
                    dispatch({ type: 'SET_ASLEEP', payload: false });
                    dispatch({ type: 'SET_AWAKE', payload: true });
                    setAnimation("animate__fadeIn");
                }
            });
        }
    }, [state, dispatch])

    const sleep = () => {
        setAnimation("animate__fadeOut");
        setTimeout(() => {
            dispatch({ type: 'SET_ASLEEP', payload: true});
        }, 500);
    }

    const checkPassword = (ev) => {
        ev.preventDefault();
        let password = state.password.toLowerCase().trim();
        if (password === 'saint-saens' || password === 'saint saens' || password === 'saintsaens') {
            setAnimation("animate__fadeOut");
            setTimeout(() => {
                dispatch({ type: 'SET_STARTED', payload: true});
                setAnimation("animate__fadeIn");
            }, 1000);
        } else if (password === '') {
            window.alert('come on, you have to at least try!')
        } else {
            window.alert("sorry, that's incorrect; there might a clue lying around somewhere...");
        }
    }

    return (
        <Container animation={animation}>
            {!state.awake && <Home sleep={sleep} />} 
            {state.awake && !state.started && <Password checkPassword={checkPassword} />}
            {state.started && <Quiz />}
        </Container>
    )
}