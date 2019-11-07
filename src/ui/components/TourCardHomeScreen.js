import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import "./tour-style.css";
const Title = styled(Card.Title)`
  text-align: Center;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: xx-large;
`;
const TourCardHomeScreen = props => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img src={props.image} alt={props.image} />
      <Card.ImgOverlay>
        <Title>{props.name}</Title>
      </Card.ImgOverlay>
    </Card>
  );
};

export default TourCardHomeScreen;
