import React, { useContext } from 'react';
import { Context } from '../Store';
import Clips from '../assets/Clips';
import Images from '../assets/Images';
import Clip from '../components/Clip';
import Image from '../components/Image';
import Questions from '../components/Questions';


export default function Quiz() {
    const [state, dispatch] = useContext(Context);

    const checkAnswer = (ev) => {
        let guess = ev.target.id;
        if (guess === state.answers[state.index]) {
            dispatch({ type: 'SET_INDEX', payload: state.index + 1 });
        }
    };

    return (
        <>
            <Clip src={ Clips[state.answers[state.index]] } />
            <Questions>
                {state.questions[state.index].map((question, i) => 
                    <Image key={i} id={question} src={Images[question]} alt={question} onClick={checkAnswer} />
                )}
            </Questions>
        </>
    )
}