import { useState } from "react";
import axios from "axios";
import TextEditor from "./TextEditor";

const API_URL = import.meta.env.REACT_APP_API_URL || "http://localhost:5005";

function AddNote(props){
    const [title,setTitle]=useState("");
    const [tag,setTag]=useState("");
    const [text,setText]=useState("");

    const handleSubmit= (e)=>{
        e.preventDefault();

        const requestBody= {title,tag,text};
        const storedToken = localStorage.getItem('authToken');
        axios
            .post(`${API_URL}/api/notes`,requestBody,{headers:{Authorization:`Bearer ${storedToken}`}})
            .then((response)=>{
                setTitle("");
                setTag("");
                setText("");

            props.refreshNotes();
            })
            .catch((error)=>console.log(error));
    };

    return(
        <div className="AddNote">
            <h3>Add Note</h3>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                type="text"
                name="title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />

                <label>Tag:</label>
                <input
                type="text"
                name="tag"
                value={tag}
                onChange={(e)=>setTag(e.target.value)}
                />

                <label>Text:</label>
                <TextEditor
                name="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );

}

export default AddNote;