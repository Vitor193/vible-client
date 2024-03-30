import { useState,useContext } from "react";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const API_URL = import.meta.env.REACT_APP_API_URL || "http://localhost:5005";

function Login(props) {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errorMessage,setErrorMessage] = useState(undefined);
    const navigate = useNavigate();
    const {storeToken,authenticateUser} = useContext(AuthContext);

    const handleEmail = (e)=>setEmail(e.target.value);
    const handlePassword = (e)=>setPassword(e.target.value);

    const handleLoginSubmit = (e)=>{
        e.preventDefault();
        const requestBody = {email,password};

        axios
            .post(`${API_URL}/auth/login`,requestBody)
            .then((response)=>{
                console.log('JWT Token', response.data.authToken);
                storeToken(response.data.authToken);
                authenticateUser();
                navigate('/');
            })
            .catch((error)=>{
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            })
    };

    return(
        <div className="Login">
            <h1>Login</h1>

            <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmail}
                    />
                <Form.Text className="text-muted">We'll never share your email with anyone else</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePassword}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">Login</Button>
            </Form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>Don't have an account yet?</p>
            <Button href="/signup">Sign up</Button>
        </div>
    )
}

export default Login;