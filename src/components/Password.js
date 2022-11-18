import React from 'react';
import styles from '../styles/Password.module.css';

export default function Password() {
    return (
        <>
            <h1>Escape from the Carnival of the Animals!</h1>
            <p className={styles.wrapper}>
                For the final puzzle you will have to correctly match
                sheet music excerpts to the corresponding audio.
                There are eight questions and you must get five correct
                to escape. You get two guesses per question.
            </p>
            <div>
                <input type="text" id='password' placeholder="enter the password" autofocus='true' />
                <input type='submit' id='submit' onClick='checkAnswer()' />
            </div>
        </>
    )
}
