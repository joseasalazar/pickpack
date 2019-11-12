import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button, Row } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";

const LoginCard = styled.div`
  padding: 40px;
  width: 40%;
  margin: auto;
  box-sizing: border-box;
  min-width: 300px;
  border-radius: 25px;
  background: white;
`;

const Title = styled.p`
  text-align: center;
  margin-bottom: 15px;
  font-size: 40px;
  font-weight: 300;
`;

const Container = styled.div`
  background: #ed8253;
  padding: 30px;
  min-height: 525px;
`;

const ErrorSpan = styled.p`
  color: red;
  font-size: 15;
  text-align: "left";
`;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("El correo es requerido.")
    .email("Por favor ingresa un correo electrónico válido."),

  password: Yup.string()
    .min(6, "La contraseña es mínimo de 6 caracteres.")
    .required("La contraseña es requerida.")
});

export class LoginForm extends Component {
  render() {
    return (
      <Container>
        <LoginCard>
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, { resetForm, setError, setSubmitting }) => {
              this.props.login({
                variables: { email: values.email, password: values.password }
              });
            }}
          >
            {({ values, errors, touched }) => (
              <Form className="form" role="form" method="post">
                <Title>Iniciar Sesión</Title>
                <hr></hr>
                <div className="form-group">
                  <label>Correo Electrónico</label>
                  <Field
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                  {touched.email && errors.email && (
                    <ErrorSpan>{errors.email}</ErrorSpan>
                  )}
                </div>
                <div className="form-group">
                  <label>Contraseña</label>
                  <Field
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                  />
                  {touched.password && errors.password && (
                    <ErrorSpan>{errors.password}</ErrorSpan>
                  )}
                </div>
                <Button type="submit" variant="primary" size="md" block>
                  Iniciar Sesión
                </Button>
                <Row className="justify-content-md-center">
                  <NavLink to="/signup">Crear una cuenta</NavLink>
                </Row>
                <Row className="justify-content-md-center">
                  <NavLink to="/forgot-password">
                    {" "}
                    He olvidado mi contraseña{" "}
                  </NavLink>
                </Row>
              </Form>
            )}
          </Formik>
        </LoginCard>
      </Container>
    );
  }
}
