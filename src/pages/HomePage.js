import React, {useState, useEffect} from "react";
import {getToken, getAccessToken} from "../utils/authToken";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Playlist from "../components/Playlist";
import {redirect} from "react-router-dom";

function HomePage() {


    const [tracksData, setTracksData] = useState([])
    const [playlistTracks, setPlayistTracks] = useState([])


    useEffect(() => {
        getAccessToken()
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