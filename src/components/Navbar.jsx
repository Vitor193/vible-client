import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/Navbar.css'
import Button from 'react-bootstrap/esm/Button';
import { AuthContext } from '../context/auth.context';

function NavbarComp() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <Navbar  expand="lg" className="custom-primary" >
        <Container>
            <Navbar.Brand href="#home">Vible</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ms-auto'>
            <Nav.Link href="/">Home</Nav.Link>

            {isLoggedIn ? (
              <>
                 <Nav.Link href="/notes">Notes</Nav.Link>
                 <Nav.Link href="/user">User</Nav.Link>
                <Button variant="light" onClick={logOutUser}>
                  Logout
                </Button>
                <span>{user && user.name}</span>
              </>
            ) : (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Signup</Nav.Link>
              </>
            )}
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavbarComp;

