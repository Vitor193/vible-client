import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import AddToDo from "./ToDoAddForm";
import ToDoCard from "./ToDoCard";


const API_URL = import.meta.env.REACT_APP_API_URL || "http://localhost:5005";

function ToDos() {
    const [toDos,setToDos]= useState([]);
    const {toDoId} = useParams();
    const [editingId, setEditingId] = useState(null);

    const getAllToDos = ()=>{
        const storedToken = localStorage.getItem("authToken")
        axios
            .get(`${API_URL}/api/todo`,{headers:{Authorization:`Bearer ${storedToken}`}})
            .then((response)=>setToDos(response.data))
            .catch((error)=>console.log(error));
    };
    useEffect(()=>{
        getAllToDos();
    },[]);

    const deleteToDo = (toDoId) =>{
        const storedToken = localStorage.getItem("authToken")
        axios   
            .delete(`${API_URL}/api/todo/${toDoId}`,{headers:{Authorization:`Bearer ${storedToken}`}})
            .then(()=>{
                getAllToDos();
            })
            .catch((error)=>console.log(error));
    };

    const updateToDo = (toDoId, updatedTitle) => {
        const storedToken = localStorage.getItem("authToken")
        axios
            .put(`${API_URL}/api/todo/${toDoId}`,{title:updatedTitle},{headers:{Authorization:`Bearer ${storedToken}`}})
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
                 {toDos.map((toDo)=>(
                <ToDoCard key={toDo._id} {...toDo}/>
               
            ))}

                <button onClick={() => deleteToDo(toDo._id)}>Delete</button>
            </div>
        ))}
    </div>
    );

}

export default ToDos;