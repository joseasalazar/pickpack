import React from "react";
import styled from "styled-components";
import { Card, Row, Tab, Col, ListGroup } from "react-bootstrap";
import Picker from "../assets/work.jpg";
import { whileStatement } from "@babel/types";

const StyledRow = styled(Row)`
  margin-bottom: 70px;
`;

const StyledTextContainer = styled.div`
    padding-left: 80px;
    padding-right: 80px;
    padding-bottom: 30px;
    text-align: center;
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

const TabContent = styled(Tab.Content)`
    padding-left: 30%;
`;

const ListItemStyle = {

}

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
                            <ListGroup.Item style={ListItemStyle} action href="#link1">
                            Unirte como proveedor
                            </ListGroup.Item>
                            <ListGroup.Item style={ListItemStyle} action href="#link2">
                            Agregar un tour o actividad
                            </ListGroup.Item>
                            <ListGroup.Item style={ListItemStyle} action href="#link3">
                            Registrar cuenta de PayPal
                            </ListGroup.Item>                        
                        </ListGroup>
                        </Col>
                        <Col md={8}>
                        <TabContent className="justify-content-md-center">
                            <Tab.Pane eventKey="#link1">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/icPx17WEL98" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Tw0wKu3tRM8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link3">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/l2BphVFAICM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Tab.Pane>
                        </TabContent>
                        </Col>
                    </Row>
                    </Tab.Container>
                    <hr/>
                </StyledContainer>
            </div>
        );
    }
}