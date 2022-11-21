import React from "react";
import styles from '../styles/Questions.module.css';

export default function Questions(props) {
    return (
        <div className={styles.grid}>
            {props.children}
        </div>
    )
}