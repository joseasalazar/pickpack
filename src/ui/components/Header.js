import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/logo.png";
import styled from "styled-components";
import { IsLoggedIn } from "./IsLoggedIn";
import { Logout } from "./Logout";
import { NavLink } from "react-router-dom";
import { RoleManager } from "../RoleManager";
const NavLinks = styled(Nav.Link)`
  color: #404040;
  font-family: "Roboto", sans-serif;
`;

export function MyTours() {
  return (
    <div>
      <RoleManager role={"customer"}>
        <Nav.Link>
          <NavLink to="/compras">Mis Tours</NavLink>
        </Nav.Link>
      </RoleManager>
      <RoleManager role={"provider"}>
        <Nav.Link>
          <NavLink to="/">Mis Tours</NavLink>
        </Nav.Link>
      </RoleManager>
    </div>
  );
}

export class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand>
            <NavLink to="/">
              <img
                src={Logo}
                width="35"
                height="35"
                className="d-inline-block align-top"
                alt="PickPack Logo"
              ></img>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Viajes" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink to="/tours">Tours</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/">Actividades</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <NavLink to="/proveedores">Proveedores</NavLink>
              </Nav.Link>
              <RoleManager role={"admin"}>
                <Nav.Link>
                  <NavLink to="/registrar-tour">Registrar Tour</NavLink>
                </Nav.Link>
              </RoleManager>
              <Nav.Link>
                <NavLink to="/contacto">Contacto</NavLink>
              </Nav.Link>
            </Nav>
            <IsLoggedIn true={<MyTours />}>
              <div></div>
            </IsLoggedIn>

            <IsLoggedIn true={<Logout />}>
              <Nav>
                <Nav.Link>
                  <NavLink to="/login">Iniciar Sesion</NavLink>
                </Nav.Link>
              </Nav>
            </IsLoggedIn>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
