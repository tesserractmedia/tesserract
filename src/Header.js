import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import HitCounter from './HitCounter';

function Header({ title }) {
    return (
        <Navbar className="sticky-top" bg="secondary" expand="lg" variant="dark">
            <Container>
                <Link to="/" className="navbar-brand">
                    {title}
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <HitCounter />
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
