import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Context } from '../Store';
import { populateQuestions, shuffleArray } from '../utils/MakeGame';
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
    const [guesses, setGuesses] = useState([]);
    const [answered, setAnswered] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const nextQuestion = useCallback(() => {
        let index = state.index + 1;
        dispatch({ type: 'SET_INDEX', payload: index });
        dispatch({ type: 'SET_AUDIO', payload: new Audio(Clips[state.answers[index]]) });
        setGuesses([]);
        setAnswered(false);
        setDisabled(false);
    }, [dispatch, state.answers, state.index]);

    const updateProgress = () => {
        let progress = state.progress + 1;
        dispatch({ type: 'SET_PROGRESS', payload: progress });
    };

    // set playing to false when audio finishes
    // to show play button instead of pause
    state.audio.onended = () => setPlaying(false);

    const checkAnswer = (ev) => {
        let guess = ev.target.id;
        // handle correct guess
        if (guess === state.answers[state.index]) {
            // disable all click events
            setDisabled(true);

            // pause audio if it's playing
            if (!state.audio.paused) {
                state.audio.pause();
                setPlaying(!playing);
            }

            // mark as answered correctly
            setAnswered(true);

            // check if this is the last question
            if (state.progress === 4) {
                // end quiz and display 'Escaped' screen
                dispatch({ type: 'SET_ESCAPED', payload: true });
            } else {
                // update progress
                setTimeout(() => {
                    updateProgress();
                    nextQuestion();
                }, 1000);
            }
        // handle incorrect guess
        } else {
            // add guess ID to array of incorrect guesses
            setGuesses(prev => [...prev, guess]);
            
            /*
                the remaining logic is handled in the
                useEffect hook below, since it relies
                upon knowing the most up-to-date
                length of the guesses array
            */
        }
    };

    useEffect(() => {
        // check if this is the second incorrect guess
        if (guesses.length === 2) {
            // disable all click events
            setDisabled(true);

            // pause audio if it's playing
            if (!state.audio.paused) {
                state.audio.pause();
                setPlaying(!playing);
            }
            
            // check if game is unwinnable
            if (state.index === 7 || state.answers.length - state.index + state.progress - 5 < 1) {
                // reset game to starting conditions
                setTimeout(() => {
                    let newAnswers = shuffleArray(Object.keys(Clips));
                    dispatch({ type: 'SET_INDEX', payload: 0 });
                    dispatch({ type: 'SET_ANSWERS', payload: newAnswers });
                    dispatch({ type: 'SET_QUESTIONS', payload: populateQuestions(newAnswers, Images) });
                    dispatch({ type: 'SET_PROGRESS', payload: 0 });
                }, 1000);
            } else {
                // continue to next question without updating progress
                setTimeout(() => {
                    nextQuestion();
                }, 1000);
            }
        }
    }, [dispatch, guesses, playing, state.answers, state.audio, state.index, state.progress, nextQuestion]);

    const toggle = () => setPlaying(!playing);

    return (
        <>
            <ProgressBar width={ state.progress } />
            <Clip audio={ state.audio } playing={ playing } toggle={ toggle } disabled={ disabled } />
            <Questions>
                {state.questions[state.index].map((question, i) => 
                    <Image 
                        key={i} 
                        id={question} 
                        src={Images[question]} 
                        alt={question} 
                        checkAnswer={checkAnswer} 
                        status={guesses.includes(question) ? 'incorrect' : (answered && question === state.answers[state.index]) ? 'correct' : ''} 
                        disabled={ disabled }
                    />
                )}
            </Questions>
            <License />
        </>
    )
}