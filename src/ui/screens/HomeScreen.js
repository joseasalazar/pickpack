import React from "react";
import { Card, Figure } from "react-bootstrap";
import styled from "styled-components";
import BG from "../assets/viajaresincreible.jpeg";
import BG1 from "../assets/guysinsnow.jpg";
import Typist from "react-typist";
//import InputCard from "../components/InputDestination";

const Title = styled(Card.Title)`
  text-align: left;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: xx-large;
`;

const subTitle = {
  textAlign: "center",
  color: "black",
  fontFamily: "Roboto, sans-serif"
};

export class HomeScreen extends React.Component {
  render() {
    return (
      <div>
        <Card className="text-white">
          <Card.Img src={BG} alt="guy with bicycle" />
          <Card.ImgOverlay>
            <Card.Title>
              <Title>PickPack</Title>
            </Card.Title>
            <Typist style={subTitle}>¡Ve lejos, comienza aquí</Typist>
          </Card.ImgOverlay>
        </Card>

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
      </div>
    );
  }
}
