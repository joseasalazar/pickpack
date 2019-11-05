import React from "react";
import styled from "styled-components";
import { Card, Row, Tab, Col, ListGroup, CardDeck } from "react-bootstrap";
import Picker from "../assets/work.jpg";

const StyledRow = styled(Row)`
  margin-bottom: 70px;
`;

const StyledTextContainer = styled.div`
    padding-left: 80px;
    padding-right: 80px;
    padding-bottom: 30px;
    text-align: center;
    font-size: 160%;
    `;

const StyledContainer = styled.div`
  padding-left: 80px;
  padding-right: 80px;
`;

const IntroStyle = {
    textAlign: "center"
  };
  
const MainTitleStyle = {
    textAlign: "center",
    color: "#ed8253",
    fontWeight: "300",
    fontSize: "100px",
    marginTop: "24%",
};

const SecondaryTitleStyle = {
    color: "#ed8253",
    fontWeight: "300",
    fontSize: "70px",
    marginTop: "30px", 
    marginBottom: "30px"
}

const CardStyle = {
    paddingTop: "3%",
}

const TabContent = styled(Tab.Content)`
    padding-left: 30%;
`;

export class ComoFunciona extends React.Component {
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
                        <h1 style={MainTitleStyle}>¿Cómo funciona?</h1>
                    </Card.Title>
                    </Card.ImgOverlay>
                </Card>
                </StyledRow>

                <StyledTextContainer>
                        <p>
                        <b>PickPack</b> es una <b>plataforma digital</b> que funciona como "outlet para tours 
                        y actividades", es decir; le brindamos la opción al proveedor de <b>ofrecer 
                        tours o actividades</b> a menor precio cuando el tiempo se está acercando; 
                        de esta manera, el proveedor no pierde el 100% del espacio vacío y 
                        turistas con presupuesto más apretado tienen la oportunidad de 
                        participar en <b>experiencias inolvidables</b>. 
                        </p>
                </StyledTextContainer>

                <StyledContainer>
                    <hr/>
                    <Tab.Container defaultActiveKey="#link1">
                    <Row>
                        <Col md={3}>
                        <ListGroup variant="flush" className="justify-content-md-center" >
                            <ListGroup.Item action href="#link1">
                            Unirte como proveedor
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                            Agregar un tour o actividad
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link3">
                            Registrar cuenta de PayPal
                            </ListGroup.Item>                        
                        </ListGroup>
                        </Col>
                        <Col md={8}>
                        <TabContent className="justify-content-md-center">
                            <Tab.Pane eventKey="#link1">
                            <iframe width="650" height="405" src="https://www.youtube.com/embed/icPx17WEL98" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                            <iframe width="650" height="405" src="https://www.youtube.com/embed/Tw0wKu3tRM8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link3">
                            <iframe width="650" height="405" src="https://www.youtube.com/embed/l2BphVFAICM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Tab.Pane>
                        </TabContent>
                        </Col>
                    </Row>
                    </Tab.Container>
                    <hr/>
                </StyledContainer>

                <StyledContainer>
                    <h1 style={SecondaryTitleStyle}>Preguntas frecuentes</h1>
                    <CardDeck>
                        <Card>
                            <Card.Header><Card.Title>¿Cómo se dividen el precio de los tours?</Card.Title></Card.Header>
                            <Card.Body>
                            <Card.Text>
                                <Card.Title>10%</Card.Title>
                                Si el proveedor puede ofrecer un 10%, nosotros ofrecemos el tour con un 7% de descuento y nos quedamos con un 3%.
                                <Card.Title style={CardStyle}>15%</Card.Title>
                                Si el proveedor puede ofrecer un 15%, nosotros ofrecemos el tour con un 10% de descuento y nos quedamos con un 5%.
                                <Card.Title style={CardStyle}>20%</Card.Title>
                                Si el proveedor puede ofrecer un 20%, nosotros ofrecemos el tour con un 13% de descuento y nos quedamos con un 7%.
                                <Card.Title style={CardStyle}>25%</Card.Title>
                                Si el proveedor puede ofrecer un 25%, nosotros ofrecemos el tour con un 16% de descuento y nos quedamos con un 9%.
                                <Card.Title style={CardStyle}>30%</Card.Title>
                                Si el proveedor puede ofrecer un 30%, nosotros ofrecemos el tour con un 20% de descuento y nos quedamos con un 10%.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">*La comisión va aumentando para lograr cubrir los gastos de la plataforma de Pick Pack, de esta manera, logramos equidad y generamos una comunidad entre todos.</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                        <Card.Header><Card.Title>¿Cuáles son las políticas de cada tour?</Card.Title></Card.Header>
                            <Card.Body>
                            <Card.Text>
                                Buscando el bienestar de los demás turistas, pensamos implementar una política de un máximo de tiempo en el que se pueda empezar a promocionar el tour de 2 DÍAS ANTES en tours o actividades de un día o menos, 
                                y de 1 a 2 SEMANAS ANTES en tours Multi-día, dependiendo del tipo de tour y el número de días que duré; esto para darle preferencia a turistas o viajeros que pueden pagar su viaje en un 100%, recordando que 
                                el objetivo de la plataforma es UNICAMENTE VENDER LOS ESPACIOS SOBRANTES O VACÍOS*, por lo que dependiendo del tamaño del tour o actividad será el número de asientos vacíos que puedan ofrecerse.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">*Un ejemplo serían las rebajas a final de temporada en una plaza comercial, cuando la ropa se vende a menor precio por cambio de estación.</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Header><Card.Title>¿Cómo son los metodos de pago?</Card.Title></Card.Header>
                            <Card.Body>
                            <Card.Text>
                                Los pagos se realizan mediante PayPal, es decir, la plataforma de PayPal nos permite a nosotros como intermediario cobrar unicamente nuestra comisión y a ustedes recibir su pago completo.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="invisible">*Un ejemplo serían las rebajas a final de temporada en una plaza comercial, cuando la ropa se vende a menor precio por cambio de estación.</small>
                            </Card.Footer>
                        </Card>
                    </CardDeck> 
                    <hr/>               
                </StyledContainer>

            </div>
        );
    }
}