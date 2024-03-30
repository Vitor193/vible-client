import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import AddNote from "../components/NoteAddForm";
import NoteCard from "../components/NoteCard";

const API_URL = import.meta.env.REACT_APP_API_URL || "http://localhost:5005";

function Notes() {
    const [notes,setNotes]= useState([]);
    
    const getAllnotes = ()=>{
        const storedToken = localStorage.getItem("authToken")
        axios
            .get(`${API_URL}/api/notes`,
            {headers:{Authorization:`Bearer ${storedToken}`}})
            .then((response)=>setNotes(response.data))
            .catch((error)=>console.log(error));
    };
    useEffect(()=>{
        getAllnotes();
    },[]);

    return(
        <div className="notes">

            <AddNote refreshNotes={getAllnotes}/>

            {notes.map((note)=>(
                <NoteCard key={note._id} {...note}/>
               
            ))}

        </div>
    );

}

export default Notes;