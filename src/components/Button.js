import React from "react";
import styles from '../styles/Button.module.css';

export default function Button(props) {
    return (
        <input 
            className={styles.button}
            type={props.type}
            value={props.value || "Submit"}
            onClick={props.onClick}
        >
            {props.children}
        </input>
    )
}