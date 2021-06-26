import "./searchBar.css"
import { useState } from "react";

export default function SearchBar(){
    const [keyword, setKeyword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(keyword)
    }

    return (
    <div className="searchBar" onSubmit={handleSubmit}>
        <form className="searchForm">
            <input className="searchInput" type="text" onChange={(e) => setKeyword(e.target.value)}/><br></br>
            <button className="searchButton" tpye="submit">Search</button>   
        </form>
    </div>)
}