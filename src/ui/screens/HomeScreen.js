import React from "react";
import { Card, Figure } from "react-bootstrap";

import BG from "../assets/viajaresincreible.jpeg";
import BG1 from "../assets/guysinsnow.jpg";

export class HomeScreen extends React.Component {
  render() {
    return (
      <div>
        <Card className="text-white">
          <Card.Img src={BG} alt="guy with bicycle" />
          <Card.ImgOverlay>
            <Card.Title>PickPack</Card.Title>
            <Card.Text>¡Ve lejos, comienza aquí!</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="text-white">
          <Card.Img src={BG1} alt="guys in the snow" />
          <Card.ImgOverlay>
            <Card.Title>#Packer</Card.Title>
            <Card.Text>
              Creemos en lugares, en personas, en experiencias. Creemos en
              viajes, historias, vivencias. Creemos en viajeros, turistas y
              aventureros. Pero sobre todo, creemos en ti y en la libertad que
              mereces.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}
