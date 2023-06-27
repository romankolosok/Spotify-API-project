import React from "react";
import '../styles/track.css'

export default function Track({trackInfo}) {
    // console.log("track:" + trackInfo)

    return (
        <li>
            <div className="track-info">
                <h3>{trackInfo.name}</h3>
                <p>{`${trackInfo.album.artists[0].name} | ${trackInfo.album.name}`}</p>
            </div>
            <div className="move-btn">
                <p>+</p>
            </div>
        </li>
    )
}