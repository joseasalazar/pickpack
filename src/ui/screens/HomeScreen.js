import React from "react";

import { Card, Figure, Row, Container, Col, Carousel, Button, Jumbotron, Image } from "react-bootstrap";

import styled from "styled-components";
import BG from "../assets/hombreenelmar.png";
import Typist from "react-typist";
import Huaxteca from "../assets/huaxteca.png";
import Buggy from "../assets/junglebuggy.png";
import Surfing from "../assets/surfingontheroad.png";
import Tingo from "../assets/tingoaltango.png";
import Oaxaca from "../assets/oaxaca.png";
import Collage from "../assets/collage.png";
import Cactus from "../assets/mexicocactus.jpg";
import Luggage from "../assets/luggage.png";
import Flight from "../assets/flight.png";
import Passport from "../assets/passport.png";

const Title = styled.h1`
  color: white;
  font-size: 200%;
  margin-bottom: 25%;
`;

const subTitle = {
  textAlign: "center",
  fontSize: "200%",
  backgroundColor: "white"
};

const CarouselStyle = {
  margin: "0px",
  padding: "0px",
  maxWidth: "100%",
};

const CarouselCaption = styled(Carousel.Caption)`
  font-size: 300%;
`;

const middleCard = {
  margin: "50px",
}

const IconStyle = {
  maxWidth: "40%",
  maxHeight: "40%"
}

const JumbotronTitle = {
  fontSize: "200%"
}

const homeFooter = {
  marginBottom: "0px",
  marginTop: "30px",
  textAlign: "center"
}

export class HomeScreen extends React.Component {
  render() {
    return (
      <div>
        <Carousel interval="3000">
          <Carousel.Item>
            <img
              src={BG}
              alt="First slide"
              style={CarouselStyle}
            />
            <CarouselCaption>
              <Title>PickPack</Title>
              <Typist style={subTitle}>¡Ve lejos, comienza aquí!</Typist>
              <Button variant="dark" size="lg" href="/tours">Ver viajes</Button>
            </CarouselCaption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={Cactus}
              alt="Second slide"
              style={CarouselStyle}
            />
            <CarouselCaption>
              <Title>PickPack</Title>
              <Typist style={subTitle}>¡Únete a este grupo de viajeros!</Typist>
              <Button variant="dark" size="lg" href="/login">Crea una cuenta</Button>
            </CarouselCaption>
          </Carousel.Item>
        </Carousel>

        <Jumbotron fluid style={subTitle}>
          <Container>
            <h1 style={JumbotronTitle}>#Packers</h1>
            <hr />
            <p style={middleCard}>
              Creemos en lugares, en personas, en experiencias. Creemos en viajes, historias, vivencias.
              Creemos en viajeros, turistas y aventureros. Pero sobre todo, creemos en ti y en la libertad que mereces.
            </p>
          </Container>
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image src={Flight} style={IconStyle} />
              </Col>
              <Col xs={6} md={4}>
                <Image src={Luggage} style={IconStyle} />
              </Col>
              <Col xs={6} md={4}>
                <Image src={Passport} style={IconStyle} />
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        <Card>
          <Card.Img src={Collage}></Card.Img>
        </Card>

        <div style={homeFooter} >
          <h1>
            ¡Conoce nuestros Pickers Favoritos!
          </h1>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs lg="2">
                <Figure>
                  <Figure.Image
                    src={Oaxaca}
                    width={120}
                    height={120}
                  ></Figure.Image>
                </Figure>
              </Col>
              <Col xs lg="2">
                <Figure>
                  <Figure.Image src={Tingo} width={120} height={120}></Figure.Image>
                </Figure>
              </Col>
              <Col xs lg="2">
                <Figure>
                  <Figure.Image
                    src={Surfing}
                    width={120}
                    height={120}
                  ></Figure.Image>
                </Figure>
              </Col>
              <Col xs lg="2">
                <Figure>
                  <Figure.Image
                    src={Huaxteca}
                    width={250}
                    height={250}
                  ></Figure.Image>
                </Figure>
              </Col>
              <Col xs lg="2">
                <Figure>
                  <Figure.Image src={Buggy} width={120} height={120}></Figure.Image>
                </Figure>
              </Col>
            </Row>
          </Container>
        </div>


      </div>
    );
  }
}
