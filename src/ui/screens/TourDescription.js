import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import TourPhoto from "../assets/paris.jpeg";
import DatePicker from "react-date-picker";

import { GET_TOUR_BY_NAME } from "../../api/queries";
import { useQuery } from "@apollo/react-hooks";

import Swal from 'sweetalert2'

const StyledContainer = styled(Container)`
  margin: auto;
  box-sizing: border-box;
  margin-bottom: 50px;
`;

const TitleStyle = {
  fontWeight: "300",
  fontSize: "60px",
  marginBottom: "20px"
};

const PriceStyle = {
  fontSize: "30px",
  fontWeight: "bold"
};

const Pstyle = {
  fontSize: "18px"
};

const PhotoStyle = {
  maxWidth: "500px"
}

export function TourDescriptionScreen() {
  const { data, loading, error } = useQuery(GET_TOUR_BY_NAME, {
    variables: { name: new URLSearchParams(window.location.search).get("tour") }
  });
  if (loading) {
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Cargando tour...',
      showConfirmButton: false,
      timer: 1500
    });
    return null;
  }
  if (error) {
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'Ocurrió un error',
      footer: '<a href>Intente más tarde</a>'
    });
    return null;
  }
  if (data) return <TourDescription tour={data.getTourByName} />;
}

class TourDescription extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: new Date(),
    }
  }
  onChange = date => this.setState({ date })

  render() {
    return (
      <StyledContainer>
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <img src={this.props.tour.photo} style={PhotoStyle} alt="tour" />
          </Col>

          <Col>
            <h4 style={TitleStyle}>{this.props.tour.name}</h4>
            <p style={PriceStyle}>${this.props.tour.price}</p>
            <p style={Pstyle}>Descripción del Tour 1: Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
            <Form>
              <Form.Group controlId="exampleForm.ControlPeople">
                <Form.Label>Número de Personas</Form.Label>
                <Form.Control as="select" style={{ maxWidth: "160px" }}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlDate">
                <Form.Label>Fecha</Form.Label>
                <br></br>
                <DatePicker
                  onChange={this.onChange}
                  value={this.state.date}
                />
              </Form.Group>
              <br></br>
              <Button variant="outline-dark" style={{ width: "160px" }}>Agregar al carrito</Button>
            </Form>
          </Col>
        </Row>
      </StyledContainer>
    );
  }
}
