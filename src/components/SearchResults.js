import React from "react";
import Tracklist from "./Tracklist.js";
import '../styles/track-column.css'

export default function SearchResults() {
    return (
        <div className="column">
            <h1>Results</h1>
            <Tracklist data={[1,1,1,1,1]}/>
        </div>
    )
}