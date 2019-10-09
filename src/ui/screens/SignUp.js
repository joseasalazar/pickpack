import React from "react";
import styled from "styled-components";
import { Button} from "react-bootstrap";
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

const ErrorSpan = styled.p`
  color: red;
  font-size: 15;
  text-align: "left";
`;

const Container = styled.div`
  background:#ed8253;
  padding: 30px;
`;

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .required("El correo es requerido.")
    .email("Por favor ingresa un correo electrónico válido."),

  password: Yup.string()
    .min(6, "La contraseña es mínimo de 6 caracteres.")
    .required("La contraseña es requerida."),

  confirmarPasswd: Yup.string()
    .required("Confirmar contraseña."),

  firstName: Yup.string()
    .required("El nombre es requerido."),

  lastName: Yup.string()
    .required("El apellido es requerido."),

  dateBirth: Yup.string()
    .required("La fecha de nacimiento es requerida."),

  city: Yup.string()
    .required("La ciudad es requerida."),

  state: Yup.string()
    .required("El estado es requerido.")
});

export class SignUp extends React.Component {
  render() {
    return (
      <Container>
        <LoginCard>
          <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPasswd: "",
            dateBirth: "",
            gender: "",
            city:"",
            state: ""
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm, setError, setSubmitting }) => {
            console.log(values);
          }}
          >
            {({values, errors, touched}) => (
              <Form className="form" role="form" method="post">
                <div className="form-group row">
                  <div className="col">
                    <label>Nombre</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      />
                      {touched.firstName && errors.firstName && (
                        <ErrorSpan>{errors.firstName}</ErrorSpan>
                      )}
                  </div>
                  <div className="col">
                    <label>Apellido</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      />
                      {touched.lastName && errors.lastName && (
                        <ErrorSpan>{errors.lastName}</ErrorSpan>
                      )}
                  </div>               
                </div> 
                <div className="form-group">
                  <label>Correo electrónico</label>
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
                <div className="form-group">
                  <label>Confirmar contraseña</label>
                  <Field
                    type="password"
                    className="form-control"
                    id="confirmarPasswd"
                    name="confirmarPasswd"
                    />
                    {touched.confirmarPasswd && errors.confirmarPasswd && (
                      <ErrorSpan>{errors.confirmarPasswd}</ErrorSpan>
                    )}
                </div> 
                <div className="form-group">
                  <label>Fecha de nacimiento</label>
                  <Field
                    type="date"
                    className="form-control"
                    id="dateBirth"
                    name="dateBirth"
                  />
                  {touched.dateBirth && errors.dateBirth && (
                    <ErrorSpan>{errors.dateBirth}</ErrorSpan>
                  )}
                </div>
                <div className="form-group">
                  <label>Género</label>
                  <Field component="select" name="gender">
                    <option value="male">Hombre</option>
                    <option value="female">Mujer</option>
                    <option value="none">Prefiero no decir</option>
                  </Field>
                </div>
                <div className="form-group row">
                  <div className="col">
                    <label>Ciudad</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      />
                      {touched.city && errors.city && (
                        <ErrorSpan>{errors.city}</ErrorSpan>
                      )}
                  </div>
                  <div className="col">
                    <label>Estado</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="state"
                      name="state"
                      />
                      {touched.state && errors.state && (
                        <ErrorSpan>{errors.state}</ErrorSpan>
                      )}
                  </div>               
                </div> 
                <Button type="submit" variant="primary" size="md" block>
                  Crear cuenta
                </Button>
              </Form>
            )}
          </Formik>
        </LoginCard>
      </Container>
    );
  }
}
||||||| merged common ancestors
=======
import React from "react";
import 'antd/dist/antd.css';
import styled from 'styled-components'
import {Typography, Input, Button} from 'antd';

const LoginCard = styled.div`
    border: opx solid lightgray;
    padding: 20px;
    width: 30%;
    margin: auto;
    box-sizing: border-box;
    min-width: 300px;
`

const CardItem = styled.div`
    padding: 15px;
`
const { Title } = Typography;

export default class SignUp extends React.Component {
  render() {
    return (
      <LoginCard>
        <div>
          <Title level={2}>Register</Title>
        </div>
      <CardItem>
          <Input
              placeholder="First Name"
          />
      </CardItem>
      <CardItem>
          <Input
              placeholder="Last Name"
          />
      </CardItem>
      <CardItem>
          <Input
            type="email"
            placeholder="E-mail"
          />
      </CardItem>
      <CardItem>
          <Input
              type="password"
              placeholder="Password"
          />
      </CardItem>
      <CardItem>
          <Input
              type="password"
              placeholder="Confirm Password"
          />
      </CardItem>

      <CardItem>
        <Button type="primary" htmlType="submit" className="login-form-button">
        Sign Up
        </Button>
      </CardItem>
  </LoginCard>
    );
  }
}
>>>>>>> 3af6d7bfddb927a672d4855bfafea85540b776ce
