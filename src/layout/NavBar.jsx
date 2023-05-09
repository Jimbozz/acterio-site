import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className="sticky-top" expand="lg" bg="light">
      <Container>
        <NavLink className="navbar-brand" to="/">
          ACTERIO SITE
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/posts">
              Blog
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
