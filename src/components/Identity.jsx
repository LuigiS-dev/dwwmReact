import React from "react";

export default function Identity(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.bio}</p>
        </div>
    )
}