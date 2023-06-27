import React from "react";
import Tracklist from "./Tracklist.js";
import '../styles/track-column.css'

export default function SearchResults({tracksData , changePlaylist}) {
    const addItem = (event) => {
        const spotifyId = event.target.parentElement.attributes[0].value
        const track = tracksData.find(element => element.id === spotifyId)
        changePlaylist(arr => {
            if(arr.every(element => track !== element))
                return [track, ...arr]
            return arr
        })
    }

    return (
        <div className="column">
            <h1>Results</h1>
            <Tracklist data={tracksData} changeList={addItem}/>
        </div>
    )
}