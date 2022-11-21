import React, { useEffect, useState, useMemo } from "react";


export default function Clip(props) {
    const [icon, setIcon] = useState('play');
    const [playing, setPlaying] = useState(false);
    const audio = useMemo(() => new Audio(props.src), [props.src]);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        if (playing) {
            audio.play();
            setIcon('pause');
        } else {
            audio.pause();
            setIcon('play');
        }
    }, [playing, audio]);

    return (
        <i className={`far fa-${icon}-circle fa-5x`} onClick={toggle} />
    )
}
