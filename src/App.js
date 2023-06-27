import './App.css';
import './components/SearchBar.js'
import SearchBar from "./components/SearchBar.js";
import SearchResults from "./components/SearchResults.js";
import Playlist from "./components/Playlist.js";
import React, {useState} from "react";

function App() {

    const [tracksData, setTracksData] = useState([])
    const [playlistTracks, setPlayistTracks] = useState([])


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

export default App;
