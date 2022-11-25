import React, { useContext, useState } from 'react';
import { Context } from '../Store';
import Clips from '../assets/Clips';
import Images from '../assets/Images';
import Clip from '../components/Clip';
import Image from '../components/Image';
import License from '../components/License';
import ProgressBar from '../components/ProgressBar';
import Questions from '../components/Questions';


export default function Quiz() {
    const [state, dispatch] = useContext(Context);
    const [playing, setPlaying] = useState(false);

    // set playing to false when audio finishes
    // to show play button instead of pause
    state.audio.onended = () => setPlaying(false);

    const checkAnswer = (ev) => {
        let guess = ev.target.id;
        // perform logic on correct guess
        if (guess === state.answers[state.index]) {
            // pause audio if it's playing
            if (!state.audio.paused) {
                state.audio.pause();
                setPlaying(!playing);
            }

            let index = state.index + 1;
            let progress = state.progress + 20;
            dispatch({ type: 'SET_PROGRESS', payload: progress });
            dispatch({ type: 'SET_INDEX', payload: index });
            dispatch({ type: 'SET_AUDIO', payload: new Audio(Clips[state.answers[index]]) });
        }
    };

    const toggle = () => setPlaying(!playing);

    return (
        <>
            <ProgressBar width={ state.progress } />
            <Clip audio={ state.audio } playing={ playing } toggle={ toggle } />
            <Questions>
                {state.questions[state.index].map((question, i) => 
                    <Image key={i} id={question} src={Images[question]} alt={question} onClick={checkAnswer} />
                )}
            </Questions>
            <License />
        </>
    )
}