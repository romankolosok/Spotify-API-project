import React from "react";
import '../styles/track.css'

export default function Track(props) {
    return (
        <li>
            <div className="track-info">
                <h3>Title</h3>
                <p>Artist | Album</p>
            </div>
            <div className="move-btn">
                <p>+</p>
            </div>
        </li>
    )
}