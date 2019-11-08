import React, { Component } from "react";
import styled from "styled-components";
import { Button, Container } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import Dropzone from "react-dropzone";
import axios from "axios";
import moment from "moment";

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
    this.state = {
      file: null,
      name:
        "Arrastra la imagen del tour aquí o da click para seleccionar una imagen."
    };
  }

  onDrop = async file => {
    this.setState({ file: file[0], name: file[0].name });
  };

  formatFilename = filename => {
    const date = moment().format("YYYYMMDD");
    const randomString = Math.random()
      .toString(36)
      .substring(2, 7);
    const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/g, "-");
    const newFilename = `${date}-${randomString}-${cleanFileName}`;
    return newFilename.substring(0, 60);
  };

  uploadImageToBucket = async (file, signedRequest) => {
    const options = {
      headers: {
        "Content-Type": file.type
      }
    };
    await axios.put(signedRequest, file, options);
  };

  async uploadImageToS3() {
    const { name, file } = this.state;
    const response = await this.props.uploadToS3({
      variables: {
        filename: this.formatFilename(file.name),
        filetype: file.type
      }
    });

    const { signedRequest, url } = response.data.uploadToS3;
    await this.uploadImageToBucket(file, signedRequest);

    const tourPhoto = await this.props.registerImage({
      variables: {
        url
      }
    });
    return tourPhoto.data.registerImage;
  }

  async registerTour(values) {
    var tourPhoto = null;
    if (this.state.file !== null) {
      tourPhoto = await this.uploadImageToS3();
    }
    const tour = await this.props.registerTour({
      variables: {
        name: values.name,
        price: values.price,
        startDate: values.startDate,
        endDate: values.endDate,
        type: values.type,
        photo: tourPhoto !== null ? tourPhoto.url : ""
      }
    });
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
            type: "Day Tour",
            image: ""
          }}
          validationSchema={TourSchema}
          onSubmit={(values, { resetForm, setError, setSubmitting }) => {
            this.registerTour(values);
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
              <div className="form-group">
                <label>Image</label>
                <Dropzone onDrop={this.onDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div
                        className="text-center pt-2"
                        style={{ border: "1px solid black" }}
                        {...getRootProps()}
                      >
                        <input id="image" name="image" {...getInputProps()} />
                        <p>{this.state.name}</p>
                      </div>
                    </section>
                  )}
                </Dropzone>
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
