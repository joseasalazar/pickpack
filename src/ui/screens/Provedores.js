import React from "react";
import styled from "styled-components";
import Picker from "../assets/provider.jpg";
import Clock from "../assets/clock.png";
import Seat from "../assets/seat.png";
import Client from "../assets/client.png";
import Alps from "../assets/alps.jpg";

import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";

const StyledContainer = styled.div`
  padding-left: 80px;
  padding-right: 80px;
`;

const StyledRow = styled(Row)`
  margin-bottom: 70px;
`;

const IntroStyle = {
  textAlign: "center"
};

const MainTitleStyle = {
  textAlign: "center",
  color: "white",
  fontWeight: "300",
  fontSize: "80px",
  marginTop: "70px"
};

const ImageText = {
  textAlign: "center",
  color: "black",
  fontWeight: "300",
  fontSize: "53px",
  marginTop: "20px"
};

const TitleStyle = {
  textAlign: "center",
  fontWeight: "300",
  fontSize: "70px",
  marginBottom: "20px"
};

const SubTitleStyle = {
  textAlign: "center",
  fontWeight: "300",
  fontSize: "40px",
  marginBottom: "20px"
};

const Pstyle = {
  textAlign: "center",
  fontSize: "18px"
};

const IconStyle = {
  maxWidth: "80px",
  padding: "15px"
};

export class Proveedores extends React.Component {
  render() {
    return (
      <div>
        <StyledRow>
          <Card className="text-white">
            <div className="overflow">
              <Card.Img src={Picker} alt="picker" />
            </div>
            <Card.ImgOverlay style={IntroStyle}>
              <Card.Title>
                <h1 style={MainTitleStyle}>¡Bienvenido Picker!</h1>
              </Card.Title>
              <Button variant="dark">¿Como funciona?</Button>
            </Card.ImgOverlay>
          </Card>
        </StyledRow>

        <h2 style={TitleStyle}>¿Qué es un Picker?</h2>
        <StyledContainer>
          <StyledRow>
            <p style={Pstyle}>
              Los <b>Pickers</b> son todos aquellos <b>operadores de turismo</b>{" "}
              que necesitan ayuda para <b>optimizar</b> un poco su trabajo y
              poder <b>llenar su cupo</b> más rápido, <b>PickPack</b> les da la
              oportunidad de <b>ofrecer sus asientos vacíos</b> en <b>tours</b>{" "}
              o <b>actividades</b> cuando el tiempo se está acercando, a un{" "}
              <b>menor precio.</b>
            </p>
          </StyledRow>

          <hr></hr>

          <StyledRow>
            <Col>
              <Card.Img
                src={Clock}
                alt="time"
                style={IconStyle}
                className="col-4 mx-auto d-flex justify-content-center flex-wrap"
              />
              <h2 style={SubTitleStyle}>Tiempo</h2>
              <p style={Pstyle}>
                Ahorra tiempo y esfuerzo al colocar tus ofertas en la
                plataforma.
              </p>
            </Col>
            <Col>
              <Card.Img
                src={Seat}
                alt="seat"
                style={IconStyle}
                className="col-4 mx-auto d-flex justify-content-center flex-wrap"
              />
              <h2 style={SubTitleStyle}>Asientos Vacíos</h2>
              <p style={Pstyle}>
                Logra llenar tus asientos vacíos de último minuto para tener el
                menor número de pérdidas posibles.
              </p>
            </Col>
            <Col>
              <Card.Img
                src={Client}
                alt="client"
                style={IconStyle}
                className="col-4 mx-auto d-flex justify-content-center flex-wrap"
              />
              <h2 style={SubTitleStyle}>Clientes</h2>
              <p style={Pstyle}>
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
                <h2
                  style={ImageText}
                  // className="col-4 mx-auto d-flex justify-content-center flex-wrap"
                >
                  ¡Genera ofertas y convierte tus pérdidas en ganancias!
                </h2>
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </StyledRow>

        <h2 style={TitleStyle}> ¡Bienvenido a la familia PickPack!</h2>
        <StyledContainer>
          <StyledRow>
            <p style={Pstyle}>
              ¡Muchas gracias por tu confianza! Nos encanta poder trabajar
              contigo, para más información ve al botón en la parte superior que
              dice: ¿Cómo funciona? ¡Recuerda que esto es solo el comienzo de un
              camino lleno de aventuras!
            </p>
          </StyledRow>
        </StyledContainer>
      </div>
    );
  }
}
