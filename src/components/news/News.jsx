import "./news.css"
import { useContext } from "react";
import {Context} from "../../context/Context";

export default function News(props){
    const {dispatch, keyword, page, npages, result} = useContext(Context);

    const handleLoadMore = async (e) =>{
        e.preventDefault();
        dispatch({type:"LOAD_MORE_START"});
        await fetch("http://cors-anywhere.herokuapp.com/http://hn.algolia.com/api/v1/search?query="+keyword+"&hitsPerPage=10&page="+(page+1),{
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
            dispatch({type:"LOAD_MORE_SUCCESS",
                      maxpages:data.nbPages,
                      payload:data.hits});        
        })
        .catch(err =>{
            console.log(err);
            dispatch({type:"LOAD_MORE_FAILURE"});
        })
    }

    const handleDelete = (e) =>{
        e.preventDefault();
        dispatch({type:"DELETE_BY_INDEX",
                  target:e.target.value});
    }   

    return result && (<div className="news">
        <table className="newsTable">
            <thead>
                <tr>
                    <th className="newsTableHead">ID</th>
                    <th className="newsTableHead">Autohr</th>
                    <th className="newsTableHead">Comments</th>
                    <th className="newsTableHead">Title</th>
                    <th className="newsTableHead">URL</th>
                    <th className="newsTableHead">Remove</th>
                </tr>
            </thead>
            <tbody>
                {result.map(
                    ({objectID, author, num_comments, title, url}, index) => (
                    <tr key={objectID}>
                        <td className="newsTableCell">{objectID}</td>
                        <td className="newsTableCell">{author}</td>
                        <td className="newsTableCell">{num_comments}</td>
                        <td className="newsTableCell">{title}</td>
                        <td className="newsTableCell">{url}</td>
                        <td className="newsTableCell">
                            <button className="newsButton" onClick={handleDelete} value={index}>Delete</button>
                        </td>
                    </tr>    
                    )
                )}
            </tbody>
        </table>
            {page < npages &&
            <button className="newsLoadButton" onClick={handleLoadMore}>Load more</button>}
        </div>)
}