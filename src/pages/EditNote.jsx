import {useState,useEffect} from "react";
import axios from "axios";
import { useParams,useNavigate, Navigate } from "react-router-dom";
import TextEditor from "../components/TextEditor";

const API_URL = import.meta.env.REACT_APP_API_URL || "http://localhost:5005";

function EditNote(props){
    const [title,setTitle]= useState("");
    const [tag,setTag]= useState("");
    const [text,setText]=useState("");
    const {noteId}= useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        const storedToken = localStorage.getItem('authToken');
        axios
            .get(`${API_URL}/api/notes/${noteId}`,{headers:{Authorization:`Bearer ${storedToken}`}})
            .then((response)=>{
                const oneNote = response.data;
                setTitle(oneNote.title);
                setTag(oneNote.tag);
                setText(oneNote.text);
            })
            .catch((error)=>console.log(error));
    },[noteId]);

    const handleFormSubmit= (e)=>{
        e.preventDefault();
        const requestBody = {title,tag,text};
        const storedToken = localStorage.getItem('authToken');

        axios   
            .put(`${API_URL}/api/notes/${noteId}`, requestBody,{headers:{Authorization:`Bearer ${storedToken}`}})
            .then((response)=>{
                navigate(`/notes/${noteId}`)
            })
    };

    const deleteNote = () =>{
        const storedToken = localStorage.getItem('authToken');
        axios   
            .delete(`${API_URL}/api/notes/${noteId}`,{headers:{Authorization:`Bearer ${storedToken}`}})
            .then(()=>{
                navigate("/notes");
            })
            .catch((error)=>console.log(error));
    };

    return(
        <div className="EditNote">
            <h3>Edit the Note</h3>

            <form onSubmit={handleFormSubmit}>
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
                <TextEditor text={text} setText={setText} handleSubmit={handleFormSubmit}
                    
                    name="text"
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    />
                <button type="submit">Update Note</button>
            
            </form>
            <button onClick={deleteNote}>Delete Note</button>
        </div>
    )
}

export default EditNote;