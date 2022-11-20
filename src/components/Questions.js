import React from "react";
import Container from "./Container";

export default function Questions(props) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}