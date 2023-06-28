import React, {useState} from "react";
import Tracklist from "./Tracklist.js";
import '../styles/track-column.css'
import getUserProfile from "../utils/getProfile";
import createPlaylist from "../utils/createPlaylist";

export default function Playlist({tracksList, changePlaylist}) {

    const URIList = tracksList.map(track => track.uri)

    const [playlistName, setPlaylistName] = useState("")

    const handleInputChange = ({target}) => {
        setPlaylistName(target.value)
    }

    const removeItem = (event) => {
        const spotifyId = event.target.parentElement.attributes[0].value
        changePlaylist(arr => arr.filter(element => element.id !== spotifyId))
    }

    const savePlaylistHandle = async (event) => {
        event.preventDefault()
        try {
            if(URIList.length !== 0) {
                const profileJSON = await getUserProfile()
                const {id} = profileJSON
                const finalResponse = await createPlaylist(id, playlistName, URIList)
                if (finalResponse.hasOwnProperty('snapshot_id')) {
                    event.target.reset()
                }
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="column" onSubmit={savePlaylistHandle}>
            <form>
                <input type="text" name="paylist-name" onChange={handleInputChange} value={playlistName} required/>
                <Tracklist data={tracksList} inPlaylist={true} changeList={removeItem}/>
                <button type="submit">SAVE TO SPOTIFY</button>
            </form>
        </div>
    )
}