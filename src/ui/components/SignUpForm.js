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

const Gender = styled.label`
  padding-right: 10px;
`;

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .required("El correo es requerido.")
    .email("Por favor ingresa un correo electrónico válido."),

  password: Yup.string()
    .min(6, "La contraseña es mínimo de 6 caracteres.")
    .required("La contraseña es requerida."),

  confirmarPasswd: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
    .required("Confirmar contraseña."),

  name: Yup.string()
    .required("El nombre es requerido."),

  lastName: Yup.string()
    .required("El apellido es requerido."),

  birthDate: Yup.string()
    .required("La fecha de nacimiento es requerida."),

  city: Yup.string()
    .required("La ciudad es requerida."),

  country: Yup.string()
    .required("El estado es requerido.")
});

export class SignUpForm extends React.Component {
  render() {
    return (
      <Container>
        <LoginCard>
          <Formik
          initialValues={{ name: "", lastName: "", email: "", password: "", confirmarPasswd: "", birthDate: "", gender: "", city:"", country: "" , type: "/eCXmXakLrDc8BHabm+gAw=="}}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm, setError, setSubmitting }) => {
            this.props.signup({
              variables: { name: values.name, lastName: values.lastName, email: values.email, password: values.password, birthDate: values.birthDate, gender: values.gender, city: values.city, country: values.city, type: values.type}
            });
          }}
          >
            {({values, errors, touched}) => (
              <Form className="form" role="form" method="post">
                <div className="form-group row">
                  <div className="col">
                    <label>Nombre</label>
                    <Field type="text" className="form-control" id="name" name="name" />
                      {touched.name && errors.name && (
                        <ErrorSpan>{errors.name}</ErrorSpan>
                      )}
                  </div>
                  <div className="col">
                    <label>Apellido</label>
                    <Field type="text" className="form-control" id="lastName" name="lastName" />
                      {touched.lastName && errors.lastName && (
                        <ErrorSpan>{errors.lastName}</ErrorSpan>
                      )}
                  </div>               
                </div> 
                <div className="form-group">
                  <label>Correo electrónico</label>
                  <Field type="email" className="form-control" id="email" name="email" />
                    {touched.email && errors.email && (
                      <ErrorSpan>{errors.email}</ErrorSpan>
                    )}
                </div>
                <div className="form-group">
                  <label>Contraseña</label>
                  <Field type="password" className="form-control" id="password" name="password" />
                    {touched.password && errors.password && (
                      <ErrorSpan>{errors.password}</ErrorSpan>
                    )}
                </div> 
                <div className="form-group">
                  <label>Confirmar contraseña</label>
                  <Field type="password" className="form-control" id="confirmarPasswd" name="confirmarPasswd" />
                    {touched.confirmarPasswd && errors.confirmarPasswd && (
                      <ErrorSpan>{errors.confirmarPasswd}</ErrorSpan>
                    )}
                </div> 
                <div className="form-group">
                  <label>Fecha de nacimiento</label>
                  <Field type="date" className="form-control" id="birthDate" name="birthDate" />
                  {touched.birthDate && errors.birthDate && (
                    <ErrorSpan>{errors.birthDate}</ErrorSpan>
                  )}
                </div>
                <div className="form-group">
                  <Gender>Género</Gender>
                  <Field component="select" name="gender">
                    <option value="male">Hombre</option>
                    <option value="female">Mujer</option>
                    <option value="none">Prefiero no decir</option>
                  </Field>
                </div>
                <div className="form-group row">
                  <div className="col">
                    <label>Ciudad</label>
                    <Field type="text" className="form-control" id="city" name="city" />
                      {touched.city && errors.city && (
                        <ErrorSpan>{errors.city}</ErrorSpan>
                      )}
                  </div>
                  <div className="col">
                    <label>País</label>
                    <Field
                      type="text" className="form-control" id="country" name="country" />
                      {touched.country && errors.country && (
                        <ErrorSpan>{errors.country}</ErrorSpan>
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
