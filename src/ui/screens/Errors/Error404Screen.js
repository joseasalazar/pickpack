import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Tilte = styled.h1`
  font-size: 10rem;
`;

const Subtitle = styled.p`
  font-size: 3rem;
  letter-spacing: 1.5rem;
`;

const Legend = styled.p`
  font-size: 1.5rem;
  letter-spacing: 1rem;
`;

const Hr = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ff6f32;
  padding: 0;
`;

const Container = styled.div`
  height: 80vh;
  position: relative;
`;

const Center = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export class Error404Screen extends React.Component {
  render() {
    return (
      <Container>
        <Center className="text-center">
          <Tilte>404</Tilte>
          <Hr />
          <Subtitle>LA PÁGINA</Subtitle>
          <Legend>NO EXISTE</Legend>
          <NavLink to="/">Inicio</NavLink>
        </Center>
      </Container>
    );
  }
}
