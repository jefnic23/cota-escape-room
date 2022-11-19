import React from 'react';
import Button from '../components/Button';
import styles from '../styles/Home.module.css';

export default function Home(props) {
    return (
        <>
            <p className={styles.wrapper}>
                Press the "Sleep" button below to hide this 
                message. The screen will appear to be off and
                students will have to press the spacebar to wake
                it up. Make sure to press F11 for full screen.
            </p>
            <Button type='submit' value='Sleep' onClick={props.sleep} />
        </>
    )
}
