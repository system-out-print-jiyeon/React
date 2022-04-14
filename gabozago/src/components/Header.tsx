import './Header.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Header(){
    return (
        <div className="header">
            <Navbar bg="light" expand="lg">
                <Container>
                <Navbar.Brand href="/">GABOZAGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Start</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;