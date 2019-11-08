// import React, { Component } from "react";
// import { Button, Container, Row } from "react-bootstrap";
// import styled from "styled-components";
// import * as Yup from "yup";
// import { Formik, Field, Form } from "formik";

import React, { Component } from "react";
import styled from "styled-components";
import { Button, Container } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";

const Title = styled.p`
  text-align: center;
  margin-bottom: 15px;
  font-size: 40px;
  font-weight: 300;
`;

const ErrorSpan = styled.p`
  color: red;
  font-size: 15;
  text-align: "left";
`;

const TourSchema = Yup.object().shape({
  name: Yup.string().required("El nombre del tour es requerido."),
  startDate: Yup.string().required("La fecha de inicio es requerida."),
  endDate: Yup.string().required("La fecha final es requerida."),
  price: Yup.number()
    .min(1, "El precio minimo del tour es de $1 MXN.")
    .required("El precio del tour es requerido.")
});

export default class RegisterTourForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Formik
          initialValues={{
            name: "",
            price: "",
            startDate: "",
            endDate: "",
            type: "Day Tour"
          }}
          validationSchema={TourSchema}
          onSubmit={(values, { resetForm, setError, setSubmitting }) => {
            console.log(values);
          }}
        >
          {({ values, errors, touched }) => (
            <Form className="form" role="form" method="post">
              <Title>Registrar Tour</Title>
              <hr></hr>
              <div className="form-group">
                <label>Nombre del tour</label>
                <Field
                  type="text"
                  className="form-control"
                  id="text"
                  name="name"
                />
                {touched.name && errors.name && (
                  <ErrorSpan>{errors.name}</ErrorSpan>
                )}
              </div>
              <div className="form-group">
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
              </div>
              <div className="form-group">
                <label>Fecha de Inicio</label>
                <Field
                  type="date"
                  className="form-control"
                  id="startDate"
                  name="startDate"
                />
                {touched.startDate && errors.startDate && (
                  <ErrorSpan>{errors.startDate}</ErrorSpan>
                )}
              </div>
              <div className="form-group">
                <label>Fecha Final</label>
                <Field
                  type="date"
                  className="form-control"
                  id="endDate"
                  name="endDate"
                />
                {touched.endDate && errors.endDate && (
                  <ErrorSpan>{errors.endDate}</ErrorSpan>
                )}
              </div>

              <Button type="submit" variant="primary" size="md">
                Registrar Tour
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    );
  }
}
