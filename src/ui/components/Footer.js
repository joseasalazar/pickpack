import React from "react";
import { Card } from "react-bootstrap";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <Card.Footer className="text-muted">
          <small>Politicas PickPack</small>
          <br/>
          <small>#PickPackContigo</small>
          <br/>
          <small>¿Quieres recibir Tips y Ofertas de Viaje? </small>
        </Card.Footer>
      </div>
    );
  }
}
