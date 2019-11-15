import React from "react";
import styled from "styled-components";
import { Form, Button, Image, Alert} from "react-bootstrap";
import * as emailjs from 'emailjs-com'
import Swal from "sweetalert2";

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
    constructor(props) {
        super(props);
        this.state = { feedback: '', name: '', email: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }

    handleSubmit(event) {
        const templateId = 'template_KsxL8Chd';

        if(this.state.feedback != '' && this.state.email != '' && this.state.name != '') {
            this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
            this.resetForm()
        }
        else {
            Swal.fire({
                type: "warning",
                title: "Falta información",
                text: "Escribe tus datos para mandar el mensaje"
            });
        }
    }
    
    sendFeedback (templateId, variables) {
        emailjs.send(
            "gmailpickpack", templateId,
          variables, "user_7deTcutFHBdDu3pPITHL9"
          ).then(res => {
            Swal.fire({
                type: "success",
                title: "¡Muchas gracias!",
                text: "Se mando tu mensaje con exito"
            });
          })
          .catch(err =>     Swal.fire({
            type: "error",
            title: "Oops...",
            text: "No se pudo mandar tu mensaje",
            footer: "<p>Intente más tarde</p>"
          }))
    }

    resetForm() {
        this.setState({
          feedback: '',
          name: '',
          email: '',
        })
    }
    
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
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <Form.Group>
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" value={this.state.name} onChange={this.handleChange.bind(this, 'name')}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control as="textarea" rows="3" value={this.state.feedback} onChange={this.handleChange.bind(this, 'feedback')}/>
                            </Form.Group>
                        </Form>
                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>Enviar</Button>
                    </ContactInfo>
                    <Image src={Background} style={BgStyle}/>
                </ContactTitle>
        );
    }
}