import React, { useEffect } from "react";


export default function Clip(props) {
    const audio   = props.audio;
    const playing = props.playing;

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing, audio]);

    return (
        <span className={!props.disabled ? "hvr-icon-shrink" : ''}>
            <i 
                className={`far fa-${playing ? 'pause' : 'play'}-circle fa-5x hvr-icon`} 
                onClick={e => !props.disabled ? props.toggle() : e.preventDefault()} 
            />
        </span>
    )
}
