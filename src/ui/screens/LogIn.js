import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button, Container, Row } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";

const LoginCard = styled.div`
  padding: 20px;
  width: 30%;
  margin: auto;
  box-sizing: border-box;
  min-width: 300px;
`;

const ErrorSpan = styled.p`
  color: red;
  font-size: 15;
  text-align: "left";
`;

const SingupSchema = Yup.object().shape({
  email: Yup.string()
    .required("El correo es requerido.")
    .email("Por favor ingresa un correo electrónico válido."),

  password: Yup.string()
    .min(6, "La contraseña es mínimo de 6 caracteres.")
    .required("La contraseña es requerida.")
});

export class LogIn extends React.Component {
  render() {
    return (
      <LoginCard>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={SingupSchema}
          onSubmit={(values, { resetForm, setError, setSubmitting }) => {
            console.log(values);
          }}
        >
          {({ values, errors, touched }) => (
            <Form className="form" role="form" method="post">
              <div className="form-group">
                <label>Correo electrónico</label>
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
                Iniciar sesión
              </Button>
              <Container>
                <Row className="justify-content-md-center"><NavLink to="/signup"> Crear una cuenta</NavLink></Row>
                <Row className="justify-content-md-center"><NavLink to="/forgot-password"> He olvidado mi contraseña </NavLink></Row>
              </Container>
            </Form>
          )}
        </Formik>
      </LoginCard>
    );
  }
}
