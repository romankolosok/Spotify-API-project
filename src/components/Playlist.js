import React from "react";
import Tracklist from "./Tracklist.js";
import '../styles/track-column.css'

export default function Playlist() {
    return (
        <div className="column">
            <form>
                <input type="text" name="paylist-name" required/>
                <Tracklist data={[]}/>
                <button>SAVE TO SPOTIFY</button>
            </form>
        </div>
    )
}