import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'


function Footer() {
    return (
        <footer className="bg-light py-4 my-4 border-top fixed-bottom d-flex flex-wrap justify-content-between align-items-center">
            <Container fluid='md'>
                <Row>
                    <Col md={6}>
                        <h5>Vible</h5>
                        <p>&copy; 2024 Vible. All rights reserved.</p>
                    </Col>
                    <Col md={6}>
                        <h5>Contact</h5>
                        <p>https://github.com/Vitor193</p>
                        <p>vitormiguel135@gmail.com</p>
                    </Col>
                </Row>
                
            </Container>
        </footer>
    );
}

export default Footer;