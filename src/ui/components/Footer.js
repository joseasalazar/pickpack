import React from "react";
import { Card, Form, FormControl, Button } from "react-bootstrap";

import SocialMedia from "../components/SocialMedia";

export class Footer extends React.Component {
  render() {
    return (
      <div>
        <Card.Footer className="text-muted">
          <small>¿Quieres recibir Tips y Ofertas de Viaje? </small>
          <br></br>
          <small>¡Subscríbete a nuestro newsletter!</small>
          <Form inline>
            <FormControl
              type="email"
              placeholder="Dirección de Correo"
              className="mr-sm-2"
            />
            <Button variant="light">Enviar</Button>
          </Form>
          <br></br>
          <SocialMedia></SocialMedia>
        </Card.Footer>
      </div>
    );
  }
}
