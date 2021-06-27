import "./searchBar.css"
import { useState, useContext } from "react";
import {Context} from "../../context/Context";

export default function SearchBar(){
     const [formText, setFormText] = useState("");
    const {dispatch} = useContext(Context);

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch({type:"SEARCH_START"});
        fetch("http://cors-anywhere.herokuapp.com/http://hn.algolia.com/api/v1/search?query="+formText+"&hitsPerPage=10",{
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
            console.log(data);
            dispatch({type:"SEARCH_SUCCESS",
                      keyword:formText,
                      payload:data});        
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