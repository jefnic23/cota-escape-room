import React, { useEffect, useState, useMemo } from "react";


export default function Clip(props) {
    const [playing, setPlaying] = useState(false);
    const audio = useMemo(() => new Audio(props.src), [props.src]);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing, audio]);

    return (
        <span className="hvr-icon-shrink">
            <i className={`far fa-${playing ? 'pause' : 'play'}-circle fa-5x hvr-icon`} onClick={toggle} />
        </span>
    )
}
