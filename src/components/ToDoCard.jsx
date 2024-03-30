import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Button.css'
import axios from 'axios';

function ToDoCard({title,topic,_id}){
    
    return(
        <div className="ToDoCard card">
            <Card className="terciary">
                <Card.Header>{title}</Card.Header>
                <Card.Text>{topic}</Card.Text>
            
        
            </Card>
        </div>
    )
}

export default ToDoCard;