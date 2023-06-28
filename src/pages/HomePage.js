import React, {useState, useEffect} from "react";
import {getToken, getCode} from "../utils/authToken";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Playlist from "../components/Playlist";

function HomePage() {

    const [tracksData, setTracksData] = useState([])
    const [playlistTracks, setPlayistTracks] = useState([])

    useEffect(() => {
        getCode()
    }, [])

    return (
        <>
            <SearchBar setData={setTracksData}/>
            <div className="track-columns">
                <SearchResults tracksData={tracksData} changePlaylist={setPlayistTracks}/>
                <Playlist tracksList={playlistTracks} changePlaylist={setPlayistTracks}/>
            </div>
        </>
    );
}

export default HomePage;