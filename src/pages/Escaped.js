import React from "react";
import Confetti from "react-confetti";
import styles from '../styles/Escaped.module.css';

export default function Escaped() {
    return (
        <>
            <h1 className={styles.title}>you escaped!</h1>
            <Confetti gravity={0.02} />
        </>
    )
}
