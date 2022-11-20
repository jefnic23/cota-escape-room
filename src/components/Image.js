import React from "react";

export default function Image(props) {
    return (
        <img 
            src={props.src}
            alt={props.alt}
            id={props.id}
        />
    )
}