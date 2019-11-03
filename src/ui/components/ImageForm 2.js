import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import Dropzone from "react-dropzone";
import axios from "axios";
import moment from "moment";

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

export class ImageForm extends Component {
  state = {
    file: null,
    name: "Drag 'n' drop some files here, or click to select files"
  };

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

    console.log(tourPhoto);
  }

  render() {
    return (
      <LoginCard>
        <Formik
          initialValues={{
            image: ""
          }}
          onSubmit={(values, { resetForm, setError, setSubmitting }) => {
            console.log(values, this.state);
            this.uploadImageToS3();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleBlur,
            isSubmitting
          }) => (
            <form
              className="form"
              role="form"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label>Image</label>
                <Dropzone onDrop={this.onDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()}>
                        <input id="image" name="image" {...getInputProps()} />
                        <p>{this.state.name}</p>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
              <Button type="submit" variant="primary" size="md" block>
                Send
              </Button>
            </form>
          )}
        </Formik>
      </LoginCard>
    );
  }
}
