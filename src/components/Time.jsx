import React from "react";

export default function Time(props){
    return (
        <div>
            il est {props.date.toLocaleString()}
        </div>
    )
}