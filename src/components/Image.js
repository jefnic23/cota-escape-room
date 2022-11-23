import React from "react";

export default function Image(props) {
    return (
        <span className="hvr-shrink">
            <img 
                src={props.src}
                alt={props.alt}
                id={props.id}
                onClick={props.onClick}
            />
        </span>
    )
}