import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import TourCard from "../components/TourCard";

const StyledRow = styled(Row)`
  padding: 50px;
  margin: auto;
  box-sizing: border-box;
  min-width: 300px;
`;

const tours = [
  {
    id: 1,
    name: "Tour1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. ",
    image:
      "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    price: "$100"
  },
  {
    id: 2,
    name: "Tour2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. ",
    image:
      "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    price: "$400"
  },
  {
    id: 3,
    name: "Tour3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. ",
    image:
      "https://images.pexels.com/photos/2441199/pexels-photo-2441199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    price: "$200"
  },
  {
    id: 4,
    name: "Tour4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. ",
    image:
      "https://images.pexels.com/photos/604661/pexels-photo-604661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    price: "$300"
  }
];

export class Tours extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <StyledRow>
            <h1>Tours y Actividades</h1>
          </StyledRow>
          <StyledRow>
            {tours.map(tour => {
              return (
                <Col className="col-md-4">
                  <TourCard
                    name={tour.name}
                    description={tour.description}
                    price={tour.price}
                    image={tour.image}
                  />
                </Col>
              );
            })}
          </StyledRow>
        </Container>
      </div>
    );
  }
}
