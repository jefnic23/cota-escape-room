import React from "react";
import styles from '../styles/Image.module.css';

export default function Image(props) {
    const markStatus = (status) => {
        switch(status) {
            case 'incorrect':
                return styles.incorrect;
            case 'correct':
                return styles.correct;
            default:
                return '';
        }
    }

    const showIcon = (status) => {
        switch(status) {
            case 'incorrect':
                return "fa-times-circle";
            case 'correct':
                return "fa-check-circle";
            default:
                return '';
        }
    }

    return (
        <div className={`${(props.status === '' && !props.disabled) ? "hvr-shrink" : ''} ${styles.question}`}>
            <i className={`${styles.icon} ${markStatus(props.status)} far ${showIcon(props.status)} ${props.status ? 'fade-in' : ''}`} />
            <img 
                className={props.status ? styles.disabled : ""}
                src={props.src}
                alt={props.alt}
                id={props.id}
                onClick={e => (props.status === '' && !props.disabled) ? props.checkAnswer(e) : e.preventDefault()}
            />
        </div>
    )
}