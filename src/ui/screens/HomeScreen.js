import React from "react";

import {
  Card,
  Figure,
  Row,
  Container,
  Col,
  CardColumns
} from "react-bootstrap";

import styled from "styled-components";
import BG from "../assets/viajaresincreible.jpeg";
import BG1 from "../assets/guysinsnow.jpg";
import Typist from "react-typist";
import TourCardHomePage from "../components/TourCardHomeScreen";
import Huaxteca from "../assets/huaxteca.png";
import Buggy from "../assets/junglebuggy.png";
import Surfing from "../assets/surfingontheroad.png";
import Tingo from "../assets/tingoaltango.png";

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
                          
        <h5 style={{ textAlign: "center" }}>¡Conoce nuestras opciones!</h5>
                
        <Container>
                    
          <StyledRow>
                        
            {tours.map(tour => {
              return (
                <Col className="col-md-4">
                                    
                  <TourCardHomePage name={tour.name} image={tour.image} />
                                  
                </Col>
              );
            })}
                      
          </StyledRow>
                  
        </Container>
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
                
        <Container>
                    
          <StyledRow>
                        
            <Figure>
                            
              <Figure.Image width={171} height={180} src={Buggy}></Figure.Image>
                          
            </Figure>
                        
            <Figure>
                            
              <Figure.Image
                width={171}
                height={180}
                src={Huaxteca}
              ></Figure.Image>
                          
            </Figure>
                        
          </StyledRow>
                  
        </Container>
                 
      </div>
    );
  }
}
