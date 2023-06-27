import React, {useState} from "react";
import '../styles/searchbar.css'
import getTracksList from "../utils/getTracks";

export default function SearchBar(props) {
    const [str, setStr] = useState("")

    const inputChangeHandle = ({target}) => {
        setStr(target.value)
    }

    const submitHandle = async (event) => {
        event.preventDefault()
        try{
            const tracks = await getTracksList(str)
            console.log(tracks)
            props.setData(tracks)
        } catch(error) {
            console.log(error)
        }

    }

    return (
        <form onSubmit={submitHandle}>
            <input type="text" value={str} onChange={inputChangeHandle} required/>
            <button type="submit">SEARCH</button>
        </form>
    )
}