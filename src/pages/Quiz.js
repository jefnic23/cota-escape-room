import React, { useState } from 'react';
import Clips from '../assets/Clips';
import Images from '../assets/Images';

import Clip from '../components/Clip';
import Image from '../components/Image';
import Questions from '../components/Questions';

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function populateQuestions(answers) {
    let used = [];
    let questions = [];
    for (let i=0; i < answers.length; i++) {
        let wrong_answers = shuffleArray(Object.keys(Images).filter(pic => pic !== answers[i] && !used.includes(pic))).slice(0,3);
        questions.push(shuffleArray(wrong_answers.concat(answers[i])));
        used.push(answers[i]);
    };
    return questions;
}

export default function Quiz(props) {
    const [index, setIndex] = useState(0);

    const answers = shuffleArray(Object.keys(Clips));
    const questions = populateQuestions(answers);

    return (
        <>
            <Clip src={ Clips[answers[index]] } />
            <Questions>
                {questions[index].map((question, i) => 
                    <Image key={i} id={question} src={Images[question]} alt={question} />
                )}
            </Questions>
        </>
    )
}