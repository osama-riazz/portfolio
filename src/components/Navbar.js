import React from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/dp.jpg'

function BasicExample() {
    return (
        <Navbar bg="dark" expand="lg" sticky="top">
            <Container>
                <Col xs lg='8'>
                    <Navbar.Brand href="#home" style={{ color: 'white' }}>
                        <img
                            style={{ borderRadius: '50%', marginRight: '10px' }}
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        Muhammmad Osama Riaz</Navbar.Brand>
                </Col>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Col className='justify-item-center'>
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto float-end"  >
                            <Nav.Link href="#home" style={{ color: 'white' }}>Home</Nav.Link>
                            <Nav.Link href="#skills" style={{ color: 'white' }}>skills</Nav.Link>
                            <Nav.Link href="#projects" style={{ color: 'white' }}>Projects</Nav.Link>
                            <Nav.Link href="#footer" style={{ color: 'white' }}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Col>
            </Container>
        </Navbar>
    );
}

export default BasicExample;