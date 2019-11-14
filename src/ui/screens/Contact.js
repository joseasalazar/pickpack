import React from "react";
import styled from "styled-components";
import { Form, Button, Image} from "react-bootstrap";
import Phone from "../assets/call.png";
import Mail from "../assets/email.png";
import Location from "../assets/location.png";
import Background from "../assets/vintagemail.jpg";

const ContactTitle = styled.div `
    padding: 110px 16px 0px 16px;
    text-align: center;
`;

const ContactInfo = styled.div `
    text-align: left;
    padding: 30px 300px;
`;

const IconStyle = {
    maxWidth: "30px",
    maxHeight: "30px",
    marginRight: "30px",
    marginBottom: "10px"
  };

  const BgStyle = {
      maxWidth: "70%"
  }

export class Contact extends React.Component {
    render() {
        return (
                <ContactTitle id="contact">
                    <h3 class="w3-center">CONTACTO</h3>
                    <p >¿Tienes alguna duda o comentario? Mandanos un mensaje:</p>
                    <ContactInfo>
                        <p><Image src={Location} style={IconStyle}/> Monterrey, MX</p>
                        <p><Image src={Phone} style={IconStyle}/> Teléfono: +52 3330168108</p>
                        <p><Image src={Mail} style={IconStyle}/> Correo electrónico: fabiola@pickpack.com.mx</p>
                        <br/>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                        </Form>
                        <Button variant="primary" type="submit">Enviar</Button>
                    </ContactInfo>
                    <Image src={Background} style={BgStyle}/>
                </ContactTitle>
        );
    }
}