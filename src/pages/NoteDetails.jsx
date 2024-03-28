import {useState,useEffect} from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";


const API_URL = "http://localhost:5005";


function NoteDetails(props){
    const [note,setNote]= useState(null);
    const {noteId} = useParams();

    const getNote = ()=>{
        axios
            .get(`${API_URL}/notes/${noteId}`)
            .then((response)=>{
                const oneNote = response.data;
                setNote(oneNote);
            })
            .catch((error)=>console.log(error));
    };

    useEffect(()=>{
        getNote();
    },[]);

    return(
        <div className="NoteDetails">
            {note && (
                <>
                    <h1>{note.title}</h1>
                    <h3>{note.tag}</h3>
                    <p>{note.text}</p>
                </>
            )}

            <Link to={"/notes"}>
                <button>back to notes</button>
            </Link>
            <Link to={`notes/edit/${noteId}`}>
                <button>Edit Note</button>
            </Link>

        </div>
    )
}

export default NoteDetails;