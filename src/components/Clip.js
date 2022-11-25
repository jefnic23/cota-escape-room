import React, { useEffect } from "react";


export default function Clip(props) {
    const audio   = props.audio;
    const playing = props.playing;
    const toggle  = props.toggle; 

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing, audio]);

    return (
        <span className="hvr-icon-shrink">
            <i className={`far fa-${playing ? 'pause' : 'play'}-circle fa-5x hvr-icon`} onClick={toggle} />
        </span>
    )
}
