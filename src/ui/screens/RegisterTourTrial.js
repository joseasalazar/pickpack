import React, { Fragment } from "react";
import { Form, Row, Col } from "react-bootstrap";
//import { Formik } from "formik";

export default function RegisterTourTrial() {
  return (
    <Form>
      <h3>Dar de alta un tour</h3>

      <Form.Group as={Row}>
        <Form.Label column sm="2">
          Nombre del Tour
        </Form.Label>
        <Col sm="4">
          <Form.Control type="text" />
        </Col>
        <Form.Label column sm="2">
          Ubicación
        </Form.Label>
        <Col sm="4">
          <Form.Control type="text" />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="2">
          Precio
        </Form.Label>
        <Col sm="4">
          <Form.Control type="number" min="1" step="any" />
        </Col>
        <Form.Label column sm="2">
          Cantidad
        </Form.Label>
        <Col sm="4">
          <Form.Control type="number" />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="2">
          Descripción
        </Form.Label>
        <Col sm="4">
          <Form.Control type="text" min="1" step="any" />
        </Col>
        <Form.Label column sm="2">
          Fotos
        </Form.Label>
        <Col sm="4">
          <Form.Control type="file" />
        </Col>
      </Form.Group>
    </Form>
  );
}
