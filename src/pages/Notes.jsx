import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import AddNote from "../components/NoteAddForm";


const API_URL = import.meta.env.REACT_APP_API_URL || "http://localhost:5005";

function Notes() {
    const [notes,setNotes]= useState([]);
    
    const getAllnotes = ()=>{
        axios
            .get(`${API_URL}/notes`)
            .then((response)=>setNotes(response.data))
            .catch((error)=>console.log(error));
    };
    useEffect(()=>{
        getAllnotes();
    },[]);

    return(
        <div className="notes">

            <AddNote refreshNotes={getAllnotes}/>

            {notes.map((note)=>{
               return( <div className="noteCard card" key={note._id}>
                    <Link to={`/notes/${note._id}`}>
                        <h3>{note.title}</h3>
                    </Link>
                </div>
               );
            })}

        </div>
    );

}

export default Notes;