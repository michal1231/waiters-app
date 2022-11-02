import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Container className="my-3">
      <Navbar bg="primary" className="rounded-1">
        <Container>
          <Navbar.Text className="text-white py-1">Waiter.app</Navbar.Text>
          <Nav className="justify-content-end">
            <Nav.Link as={NavLink} to="/" className="text-white py-1">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavBar;