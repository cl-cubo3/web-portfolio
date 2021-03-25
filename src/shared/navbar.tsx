import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = styled(Navbar)`
  background-color: #242526;
`;

const AppNavbar = () => {
  return (
    <NavBar sticky="top" variant="dark" bg="dark" expand="lg">
      <Navbar.Brand>
        <FontAwesomeIcon icon={["fab", "react"]} spin color="#61dafb" />
        &nbsp;Claudio Leiva
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer exact to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/cv">
            <Nav.Link>CV</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </NavBar>
  );
};

export default AppNavbar;
