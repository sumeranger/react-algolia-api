import "./news.css"
import { useContext } from "react";
import {Context} from "../../context/Context";

export default function News(props){
    const {dispatch, keyword, page, result} = useContext(Context);
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
                {result.hits && result.hits.map(
                    ({objectID, author, num_comments, title, url}) => (
                    <tr key={objectID}>
                        <td className="newsTableCell">{objectID}</td>
                        <td className="newsTableCell">{author}</td>
                        <td className="newsTableCell">{num_comments}</td>
                        <td className="newsTableCell">{title}</td>
                        <td className="newsTableCell">{url}</td>
                        <td className="newsTableCell">Remove</td>
                    </tr>    
                    )
                )}
            </tbody>
        </table>
            {page < result.nbPages &&
            <button className="newsLoadButton">Load more</button>}
        </div>)
}