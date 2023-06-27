import './App.css';
import './components/SearchBar.js'
import SearchBar from "./components/SearchBar.js";
import SearchResults from "./components/SearchResults.js";
import Playlist from "./components/Playlist.js";

function App() {
  return (
    <>
      <SearchBar/>
      <div className="track-columns">
        <SearchResults/>
        <Playlist/>
      </div>
    </>
  );
}

export default App;
