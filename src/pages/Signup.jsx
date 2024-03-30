import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";

const API_URL = import.meta.env.REACT_APP_API_URL || "http://localhost:5005";

function Signup(props) {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [errorMessage,setErrorMessage] = useState(undefined);

    const navigate = useNavigate;

    const handleEmail = (e)=>setEmail(e.target.value);
    const handlePassword = (e)=>setPassword(e.target.value);
    const handleName = (e)=>setName(e.target.value);

    const handleSignupSubmit = (e)=>{
        e.preventDefault();
        const requestBody = {email,password,name};

        axios
            .post(`${API_URL}/auth/signup`,requestBody)
            .then((response)=>{
                navigate('/login');
            })
            .catch((error)=>{
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription)
            })
    };

    return(
        <div className="Signup">
            <h1>Signup</h1>
            <Form onSubmit={handleSignupSubmit}>
                <Form.Group>
                <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmail}
                    />
                </Form.Group>
                <Form.Group>
                <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePassword}
                    />
                </Form.Group>
                <Form.Group>
                <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleName}
                    />
                </Form.Group>
                <Button className="secondary" type="submit">Sign up</Button>
            </Form>

            { errorMessage && <p className="error-message">{errorMessage}</p>} 
            
            <p>Already have an account?</p>
            <Button className="secondary" href="/login">Login </Button>

        </div>
    )
}

export default Signup;