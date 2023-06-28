import React from "react";
import Tracklist from "./Tracklist.js";
import '../styles/track-column.css'
import getUserProfile from "../utils/getProfile";
import {authorizeUser} from "../utils/authToken";

const authLink = authorizeUser()

export default function Playlist({tracksList, changePlaylist}) {
    const removeItem = (event) => {
        const spotifyId = event.target.parentElement.attributes[0].value
        changePlaylist(arr => arr.filter(element => element.id !== spotifyId))
    }

    const savePlaylistHandle = async (event) => {
        event.preventDefault()
        const profileJSON = await getUserProfile()
        console.log(profileJSON)
    }

    return (
        <div className="column" onSubmit={savePlaylistHandle}>
            <form>
                <input type="text" name="paylist-name" required/>
                <Tracklist data={tracksList} inPlaylist={true} changeList={removeItem}/>
                <button type="submit">SAVE TO SPOTIFY</button>
            </form>
        </div>
    )
}