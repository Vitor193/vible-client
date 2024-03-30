import { useState } from "react";
import axios from "axios";
import TextEditor from "./TextEditor";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";

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
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title:</Form.Label>
                <Form.Control
                type="text"
                name="title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTag">
                <Form.Label>Tag:</Form.Label>
                <Form.Control
                type="text"
                name="tag"
                value={tag}
                onChange={(e)=>setTag(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Text:</Form.Label>
                <TextEditor text={text} setText={setText} handleSubmit={handleSubmit}
                name="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
                </Form.Group>
                <div style={{ display: "flex", justifyContent: "center",marginTop: "50px" }}>
                <Button variant="secondary" size="lg" type="submit">Submit</Button>
                </div>
            </Form>
        </div>
    );

}

export default AddNote;