import React from "react";
import styles from '../styles/TextInput.module.css';

export default function TextInput(props) {
    return (
        <input 
            className={styles.textInput}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            autoFocus={props.autoFocus}
        >
            {props.children}
        </input>
    )
}
