import React from "react";
import '../styles/track.css'

export default function Track({trackInfo, inPlaylist, changeList, key}) {
    // console.log(trackInfo)
    const MoveButton = () => {
        if(inPlaylist) {
            return (
                <p className="move-btn" onClick={changeList}>-</p>
            )
        } else {
            return <p className="move-btn" onClick={changeList}>+</p>
        }
    }

    return (
        <li spotifyId={trackInfo.id}>
            <div className="track-info">
                <h3>{trackInfo.name}</h3>
                <p>{`${trackInfo.album.artists[0].name} | ${trackInfo.album.name}`}</p>
            </div>
            <MoveButton/>

        </li>
    )
}