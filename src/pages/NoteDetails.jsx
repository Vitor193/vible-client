import {useState,useEffect} from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import '../styles/Button.css'

const API_URL = import.meta.env.REACT_APP_API_URL || "http://localhost:5005";


function NoteDetails(props){
    const [note,setNote]= useState(null);
    const {noteId} = useParams();

    const getNote = ()=>{
        const storedToken = localStorage.getItem("authToken")
        axios
            .get(`${API_URL}/api/notes/${noteId}`,
            {headers:{Authorization:`Bearer ${storedToken}`}})
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
                    <div dangerouslySetInnerHTML={{ __html: note.text }} />
                </>
            )}

            <Link to={"/notes"}>
                <Button variant="secondary" className="custom-button">back to notes</Button>
            </Link>
            <Link to={`/notes/edit/${noteId}`}>
                <Button variant="secondary" className="custom-button">Edit Note</Button>
            </Link>

        </div>
    )
}

export default NoteDetails;