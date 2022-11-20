import React from "react";

export default function Clip(props) {
    const audio = require(props.src);

    return (
        <audio controls={true} loop={true}>
            <source src={audio} type="audio/ogg" />
        </audio>
    )
}
