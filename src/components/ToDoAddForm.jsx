import { useState } from "react";
import axios from "axios";

const API_URL= "http://localhost:5005";

function AddToDo(props){
    const [title,setTitle]= useState("");
    const [topic,setTopic]= useState("");

    const handleSubmit= (e)=>{
        e.preventDefault();

        const requestBody ={title,topic};
        axios   
            .post(`${API_URL}/todo`, requestBody)
            .then((response)=>{
                setTitle("");
                setTopic("");
            })
            .catch((error)=>console.log(error));
    };

    return(
        <div className="AddToDo">
            <h3>Add Todo</h3>

            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    />

                <label>Topic:</label>
                <textarea
                    typeof="text"
                    name="topic"
                    value={topic}
                    onChange={(e)=>setTopic(e.target.value)}
                    />

                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default AddToDo;