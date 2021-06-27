import "./searchBar.css"
import { useState, useContext } from "react";
import {Context} from "../../context/Context";

export default function SearchBar(){
     const [formText, setFormText] = useState("");
    const {dispatch} = useContext(Context);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        dispatch({type:"SEARCH_START"});
        await fetch("http://cors-anywhere.herokuapp.com/http://hn.algolia.com/api/v1/search?query="+formText+"&hitsPerPage=10",{
            method:"GET",
            headers: new Headers({"Content-Type":"application/json"})
        })
        .then(res => {
            if(res.ok){
                return res.json();
            }
            throw res;
        })
        .then(data => {
            dispatch({type:"SEARCH_SUCCESS",
                      query:formText,
                      maxpages:data.nbPages,
                      payload:data.hits});        
        })
        .catch(err =>{
            console.log(err);
            dispatch({type:"SEARCH_FAILURE"});
        })
    }

    return (
    <div className="searchBar" onSubmit={handleSubmit}>
        <form className="searchForm">
            <input className="searchInput" type="text" onChange={(e) => setFormText(e.target.value)}/><br></br>
            <button className="searchButton" tpye="submit">Search</button>   
        </form>
    </div>)
}