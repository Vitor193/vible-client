import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import AddToDo from "./ToDoAddForm";


const API_URL = import.meta.env.REACT_APP_API_URL || "http://localhost:5005";

function ToDos() {
    const [toDos,setToDos]= useState([]);
    const {toDoId} = useParams();
    const [editingId, setEditingId] = useState(null);

    const getAllToDos = ()=>{
        axios
            .get(`${API_URL}/todo`)
            .then((response)=>setToDos(response.data))
            .catch((error)=>console.log(error));
    };
    useEffect(()=>{
        getAllToDos();
    },[]);

    const deleteToDo = (toDoId) =>{
        axios   
            .delete(`${API_URL}/todo/${toDoId}`)
            .then(()=>{
                getAllToDos();
            })
            .catch((error)=>console.log(error));
    };

    const updateToDo = (toDoId, updatedTitle) => {
        axios
            .put(`${API_URL}/todo/${toDoId}`,{title:updatedTitle})
            .then(()=>{
                getAllToDos();
        setEditingId(null);
            })
        
    };

    return(
        <div className="ToDos">
        <AddToDo refreshToDo={getAllToDos} />

        {toDos.map((toDo) => (
            <div className="toDoCard card" key={toDo._id}>
                {toDo._id === editingId ? (
                    
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const updatedTitle = e.target.title.value;
                        updateToDo(toDo._id, updatedTitle);
                    }}>
                        <input type="text" name="title" defaultValue={toDo.title} />
                        <button type="submit">Save</button>
                        <button onClick={() => setEditingId(null)}>Cancel</button>
                    </form>
                ) : (
                    
                    <>
                        <li>{toDo.title}</li>
                        <button onClick={() => setEditingId(toDo._id)}>Edit</button>
                    </>
                )}
                <button onClick={() => deleteToDo(toDo._id)}>Delete</button>
            </div>
        ))}
    </div>
    );

}

export default ToDos;