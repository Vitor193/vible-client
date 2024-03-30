import {Link} from "react-router-dom";

function NoteCard({title,tag,_id}){
    return(
        <div className="NoteCard card">
            <Link to={`/notes/${_id}`}>
                <h3>{title}</h3>
            </Link>
            <h3>{tag}</h3>
        </div>
    )
}

export default NoteCard;