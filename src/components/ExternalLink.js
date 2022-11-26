import React from "react";
import styles from '../styles/ExternalLink.module.css';

export default function ExternalLink(props) {
    return (
        <a 
            className={styles.external}
            href={ props.link }
            target="_blank"
            rel="noreferrer"
        >
            { props.children }
        </a>
    )
}