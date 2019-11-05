import React from "react";
import styled from "styled-components";
import Picker from "../assets/provider.jpg";
import Clock from "../assets/clock.png";
import Seat from "../assets/seat.png";
import Client from "../assets/client.png";
import Alps from "../assets/alps.jpg";
import { Row, Col, Button, Card } from "react-bootstrap";

const StyledContainer = styled.div`
  padding-left: 80px;
  padding-right: 80px;
`;

const StyledRow = styled(Row)`
  padding: 70px;
`;
export class Proveedores extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <StyledRow>
            <Col sm={4}>
              <h2>¡Bienvenido Picker!</h2>
              <Button variant="primary">¿Como funciona?</Button>
            </Col>
            <Col sm={8}>IMAGE GOES HERE</Col>
          </StyledRow>
          <StyledRow>
            <h2>¿Qué es un Picker</h2>
            <p>
              Los <b>Pickers</b> son todos aquellos <b>operadores de turismo</b>{" "}
              que necesitan ayuda para <b>optimizar</b> un poco su trabajo y
              poder <b>llenar su cupo</b> más rápido, <b>PickPack</b> les da la
              oportunidad de <b>ofrecer sus asientos vacíos</b> en <b>tours</b>{" "}
              o <b>actividades</b> cuando el tiempo se está acercando, a un{" "}
              <b>menor precio.</b>
            </p>
          </StyledRow>
          <StyledRow>
            <Col>
              ICON GOES HERE
              <h2>Tiempo</h2>
              <p>
                Ahorra tiempo y esfuerzo al colocar tus ofertas en la
                plataforma.
              </p>
            </Col>
            <Col>
              ICON GOES HERE
              <h2>Asientos Vacíos</h2>
              <p>
                Logra llenar tus asientos vacíos de último minuto para tener el
                menor número de pérdidas posibles.
              </p>
            </Col>
            <Col>
              ICON GOES HERE
              <h2>Clientes</h2>
              <p>
                Logra un alcance a un mayor número de clientes potenciales por
                medio de PickPack.
              </p>
            </Col>
          </StyledRow>
        </StyledContainer>

        <StyledRow>
          <Card className="text-white">
            <div className="overflow">
              <Card.Img src={Alps} alt="travel" />
            </div>
            <Card.ImgOverlay style={IntroStyle}>
              <Card.Title>
                <h2 style={ImageText}>
                  ¡Genera ofertas y convierte tus pérdidas en ganancias!
                </h2>
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </StyledRow>

        <h2 style={TitleStyle}> ¡Bienvenido a la familia PickPack!</h2>
        <StyledContainer>
          <StyledRow>
            <h2>¡Genera ofertas y convierte tus pérdidas en ganancias!</h2>
            BACKGROUND IMAGE HERE
          </StyledRow>
          <StyledRow>
            <h2>¡Bienvenido a la familia PickPack!</h2>
            <p>
              ¡Muchas gracias por tu confianza! Nos encanta poder trabajar
              contigo, para más información ve al botón en la parte superior que
              dice: ¿Cómo funciona?, ¡recuerda que esto es solo el comienzo de
              un camino lleno de aventuras!
            </p>
          </StyledRow>
        </Container>
      </div>
    );
  }
}
