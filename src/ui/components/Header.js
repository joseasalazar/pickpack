import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/logo.png";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const NavLinks = styled(Nav.Link)`
  color: #404040;
  font-family: "Roboto", sans-serif;
`;

export class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width="35"
              height="35"
              className="d-inline-block align-top"
              alt="PickPack Logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Viajes" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/2.1">Tours</NavDropdown.Item>
                <NavDropdown.Item href="#action/2.2">
                  Actividades
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/proveedores">Proveedores</Nav.Link>
              <Nav.Link href="/contacto">Contacto</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
