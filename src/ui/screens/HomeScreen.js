import React from "react";

import { Card, Figure, Row, Container, Col, Carousel } from "react-bootstrap";


import styled from "styled-components";
import BG from "../assets/hombreenelmar.png";
import BG1 from "../assets/guysinsnow.jpg";
import Typist from "react-typist";
import TourCardHomePage from "../components/TourCardHomeScreen";
import Huaxteca from "../assets/huaxteca.png";
import Buggy from "../assets/junglebuggy.png";
import Surfing from "../assets/surfingontheroad.png";
import Tingo from "../assets/tingoaltango.png";
import Oaxaca from "../assets/oaxaca.png";
import Riviera from "../assets/riviera.png";
import Collage from "../assets/collage.png";
//Carrusel
import Tulum from "../assets/Tulum.png";
import Hierve from "../assets/Oaxaca-hierveelagua.png";

const tours = [
  {
    id: 1,
    name: "Populares",
    image:
      "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 2,
    name: "Favoritos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. ",
    image:
      "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  }
];

const StyledRow = styled(Row)`
    padding: 20px;
    margin: auto;
    min-width: 300px;
`;

const Title = styled(Card.Title)`
  text-align: left;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: xx-large;
`;

const subTitle = {
  textAlign: "center",

  fontFamily: "Roboto, sans-serif"
};

const BodyText = styled(Card.Text)`
  text-align: left;
  font-weight: bold;

  font-size: x-large;
`;

export class HomeScreen extends React.Component {
  render() {
    return (
      <div>
        <Card className="text-white">
          <Card.Img src={BG} alt="guy with bicycle" />
          <Card.ImgOverlay>
            <Card.Title style={{ textAlign: "center", fontSize: "xx-large" }}>
              <h1>PickPack</h1>
            </Card.Title>
            <Card.Text style={{ textAlign: "center", fontSize: "large" }}>
              {" "}
              <Typist style={subTitle}>¡Ve lejos, comienza aquí!</Typist>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <br></br>
        <Carousel>
          <Carousel.Item>
            <img
              style={{ margin: "auto" }}
              className="d-block w-50"
              src={Tulum}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ margin: "auto" }}
              className="d-block w-50"
              src={Hierve}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
             
        <h1 style={{ textAlign: "center" }}>¡Conoce nuestras opciones! </h1>
               <Card className="text-white"></Card>
        <Card className="text-white">
          <Card.Img src={BG1} alt="guys in the snow" />
          <Card.ImgOverlay>
            <Title>#Packers</Title>
            <Card.Text>
              Creemos en lugares, en personas, en experiencias. Creemos en
              viajes, historias, vivencias.
              <Card.Text>
                Creemos en viajeros, turistas y aventureros. Pero sobre todo,
                creemos en ti y en la libertad que mereces.
              </Card.Text>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card>
          <Card.Img src={Collage}></Card.Img>
        </Card>
        <h5 style={{ textAlign: "center" }}>
          ¡Conoce nuestros Pickers Favoritos!
        </h5>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              <Figure>
                <Figure.Image
                  src={Oaxaca}
                  width={64}
                  height={64}
                ></Figure.Image>
              </Figure>
            </Col>
            <Col xs lg="2">
              <Figure>
                <Figure.Image src={Tingo} width={64} height={64}></Figure.Image>
              </Figure>
            </Col>
            <Col xs lg="2">
              <Figure>
                <Figure.Image
                  src={Surfing}
                  width={64}
                  height={64}
                ></Figure.Image>
              </Figure>
            </Col>

            <Col xs lg="2">
              <Figure>
                <Figure.Image
                  src={Huaxteca}
                  width={64}
                  height={64}
                ></Figure.Image>
              </Figure>
            </Col>
            <Col xs lg="2">
              <Figure>
                <Figure.Image src={Buggy} width={64} height={64}></Figure.Image>
              </Figure>
            </Col>
          </Row>
        </Container>
                                       
      </div>
    );
  }
}
