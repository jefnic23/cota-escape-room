import React from "react";
import styles from '../styles/ProgressBar.module.css';

export default function ProgressBar(props) {
    return (
        <div className={styles.container}>
            <span style={{ width: `${props.width}%`}} />
        </div>
    )
}