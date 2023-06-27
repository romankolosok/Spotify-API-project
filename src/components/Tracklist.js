import React from "react";
import Track from "./Track.js";
import '../styles/tracklist.css'

export default function Tracklist(props) {
    return (
        <ul>
            {
                props.data.map(element => <Track/>)
            }
        </ul>
    )
}