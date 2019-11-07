import React, { Component } from "react";
import styled from "styled-components";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, Field } from "formik";

const ErrorSpan = styled.p`
  color: red;
  font-size: 15;
  text-align: "left";
`;

const TourSchema = Yup.object().shape({
  name: Yup.string().required("El nombre del tour es obligario "),

  startDate: Yup.string().validate(
    "La Fecha de Inicio del tour es obligatorio "
  ),

  endDate: Yup.string().validate("La Fecha Final del tour es obligatorio ")
});

export class RegisterTourTrial extends Component {
  render() {
    return (
      <Container>
        <Formik
          initialValues={{
            name: "",
            price: "",
            startDate: "",
            endDate: "",
            type: "Tour de un día"
          }}
          validationSchema={TourSchema}
          onSubmit={(values, { resetForm, setError, setSubmitting }) => {
            this.props.registerTour({
              variables: {
                name: values.name,
                price: values.price,
                startDate: values.startDate,
                endDate: values.endDate,
                type: values.type
              }
            });
          }}
        >
          {({ values, errors, touched }) => (
            <Form className="form" role="form" method="post">
              <h3>Registrar Tour</h3>
              <hr></hr>
              <Form.Group>
                <label>Nombre del tour</label>
                <Field
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                />
                {touched.name && errors.name && (
                  <ErrorSpan>{errors.name}</ErrorSpan>
                )}
                <label>Precio del tour</label>
                <Field
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                />
                {touched.price && errors.price && (
                  <ErrorSpan>{errors.price}</ErrorSpan>
                )}
                <br></br>
                <label>Fecha de Inicio</label>
                <Field
                  type="date"
                  className="form-control"
                  id="startDate"
                  name="startDate"
                ></Field>
                {touched.startDate && errors.startDate && (
                  <ErrorSpan>{errors.startDate}</ErrorSpan>
                )}
                <label>Fecha Final</label>
                <Field
                  type="date"
                  className="form-control"
                  id="endDate"
                  name="endDate"
                ></Field>
                {touched.endDate && errors.endDate && (
                  <ErrorSpan>{errors.endDate}</ErrorSpan>
                )}
                <label>Descripcion del Tour</label>
                <Field
                  type="text"
                  className="form-control"
                  id="type"
                  name="type"
                ></Field>
                <Button variant="primary" type="submit">
                  Subir
                </Button>
              </Form.Group>
            </Form>
          )}
        </Formik>
      </Container>
    );
  }
}
