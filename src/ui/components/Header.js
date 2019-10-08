import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/logo.png";

export class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Inicio</Navbar.Brand>
          <NavDropdown title="Viajes" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/2.1">Tours</NavDropdown.Item>
            <NavDropdown.Item href="#action/2.2">Actividades</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>Provedores</Nav.Link>
          <Nav.Link>Blog</Nav.Link>
        </Navbar>
      </div>
    );
  }
}
