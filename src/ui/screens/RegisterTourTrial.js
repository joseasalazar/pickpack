import React from "react";
import { Form } from "react-bootstrap";
//import { Formik } from "formik";

export default function RegisterTourTrial() {
  return (
    <Form>
      <h3>Dar de alta un tour</h3>
      <h6>Nombre del tour </h6>
      <Form.Control size="lg" type="text" placeholder="" />
      <h6>Lugar del Tour </h6>
      <Form.Control size="lg" type="text" placeholder="Small text" />
      <h6>Fechas Disponibles </h6>
      <Form.Control size="lg" type="date" placeholder="Small text" />
      <h6>Fotos </h6>
      <Form.Control size="lg" type="file" placeholder="Small text" />

      <Form.Control type="text" placeholder="Normal text" />
      <br />
      <Form.Control size="sm" type="text" placeholder="Small text" />
    </Form>
  );
}
