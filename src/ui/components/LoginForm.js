import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
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

export class LoginForm extends Component {
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
            this.props.login({
              variables: { email: values.email, password: values.password }
            });
          }}
        >
          {({ values, errors, touched }) => (
            <Form className="form" role="form" method="post">
              <div className="form-group">
                <label>Email address</label>
                <Field
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                />
                {touched.email && errors.email && (
                  <ErrorSpan>{errors.email}</ErrorSpan>
                )}
              </div>
              <div className="form-group">
                <label>Password</label>
                <Field
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  name="password"
                />
                {touched.password && errors.password && (
                  <ErrorSpan>{errors.password}</ErrorSpan>
                )}
              </div>
              <NavLink to="/forgot-password"> Forgot password </NavLink>
              <Button type="submit" variant="primary" size="md" block>
                Log In
              </Button>
              Or <NavLink to="/register">Sign Up!</NavLink>
            </Form>
          )}
        </Formik>
      </LoginCard>
    );
  }
}
