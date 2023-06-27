import React from "react";
import Tracklist from "./Tracklist.js";
import '../styles/track-column.css'

export default function SearchResults({tracksData}) {
    return (
        <div className="column">
            <h1>Results</h1>
            <Tracklist data={tracksData}/>
        </div>
    )
}