import React, {useState} from "react";
import '../styles/searchbar.css'
import getTracksList from "../utils/getTracks";

export default function SearchBar() {
    const [str, setStr] = useState("")

    const inputChangeHandle = ({target}) => {
        setStr(target.value)
    }

    const submitHandle = async (event) => {
        event.preventDefault()
        const tracks = await getTracksList(str)
        console.log(tracks)
    }

    return (
        <form onSubmit={submitHandle}>
            <input type="text" value={str} onChange={inputChangeHandle} required/>
            <button type="submit">SEARCH</button>
        </form>
    )
}