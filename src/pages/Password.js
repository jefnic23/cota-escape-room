import React, { useContext } from 'react';
import { Context } from '../Store';
import Button from '../components/Button';
import Form from '../components/Form';
import TextInput from '../components/TextInput';
import styles from '../styles/Password.module.css';

export default function Password(props) {
    const [state, dispatch] = useContext(Context);

    return (
        <>
            <h1>Escape from the Carnival of the Animals!</h1>
            <p className={styles.wrapper}>
                For the final puzzle you will have to correctly match
                sheet music excerpts to the corresponding audio.
                There are eight questions and you must get five correct
                to escape. You get two guesses per question.
            </p>
            <Form onSubmit={props.checkAnswer}>
                <TextInput 
                    type="text" 
                    placeholder="enter the password" 
                    value={state.password}
                    onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
                    autoFocus={true} 
                />
                <Button type='submit' />
            </Form>
        </>
    )
}
