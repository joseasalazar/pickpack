import React from "react";
import { Card } from "react-bootstrap";

export class Footer extends React.Component {
  render() {
    return (
      <div className="stickyFooter">
        <Card.Footer className="text-muted">
          <small>¿Quieres recibir Tips y Ofertas de Viaje? </small>
        </Card.Footer>
      </div>
    );
  }
}
