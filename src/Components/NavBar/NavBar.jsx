import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'


const NavBar = () => {
    return (
        <Navbar bg="" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="https://static.vecteezy.com/system/resources/previews/001/192/065/non_2x/circle-logo-turbine-png.png" width='70px' alt="" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='basic-navbar-nav'>
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default NavBar