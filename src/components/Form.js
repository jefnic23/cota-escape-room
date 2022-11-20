import React from 'react';
import styles from '../styles/Form.module.css';

export default function Form(props) {
    return (
        <form className={styles.form} onSubmit={props.onSubmit}>
            {props.children}
        </form>
    )
}