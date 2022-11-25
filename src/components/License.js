import React from "react";
import ExternalLink from "./ExternalLink";
import styles from '../styles/License.module.css';

export default function License() {
    return (
        <div className={styles.container}>
            <ExternalLink link="https://www.ibiblio.org/pandora/vorbis/2_pianos/pan116e/index.html">
                <em>The Carnival of the Animals</em>
            </ExternalLink>
            &nbsp;by Neil and Nancy O'Doan and the Seattle Youth Symphony conducted by Vilem Sokol is licensed under&nbsp;
            <ExternalLink link="https://creativecommons.org/licenses/by-sa/2.0/legalcode">
                CC SA 2.0
            </ExternalLink>
        </div>
    )
}