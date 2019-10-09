import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/logo.png";
import user from "../assets/user.png";
import styled from "styled-components";
import { Link } from "react-router";
import NavLink from "react-bootstrap/NavLink";

const HeaderLink = styled(NavLink)`
  color: black;
  font-family: "Roboto", sans-serif;
`;

export class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar sticky="top" bg="light" variant="light" expand="lg">
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="PickPack Logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <HeaderLink>
              <NavDropdown title="Viajes" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/2.1">Tours</NavDropdown.Item>
                <NavDropdown.Item href="#action/2.2">
                  Actividades
                </NavDropdown.Item>
              </NavDropdown>
            </HeaderLink>

            <Nav.Link>
              <HeaderLink>Contacto</HeaderLink>
            </Nav.Link>
            <Nav.Link>
              <HeaderLink>Provedores</HeaderLink>
            </Nav.Link>
            <HeaderLink>
              <Nav.Link>Login</Nav.Link>
            </HeaderLink>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
