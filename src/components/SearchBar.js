import React, {useState} from "react";
import '../styles/searchbar.css'

export default function SearchBar() {
    const [str, setStr] = useState("")

    const inputChangeHandle = ({target}) => {
        setStr(target.value)
    }

    return (
        <form>
            <input type="text" value={str} onChange={inputChangeHandle} required/>
            <button type="submit">SEARCH</button>
        </form>
    )
}