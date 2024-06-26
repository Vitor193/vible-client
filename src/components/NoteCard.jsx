import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Button.css'

function NoteCard({title,tag,_id}){
    return(
        <div className="NoteCard card">
            <Card className="terciary">
                <Card.Header>{title}</Card.Header>
                <Card.Text>{tag}</Card.Text>
            
            <Link to={`/notes/${_id}`}>
                <Button className="custom-button" variant="secondary">see Note</Button>
            </Link>
            </Card>
        </div>
    )
}

export default NoteCard;