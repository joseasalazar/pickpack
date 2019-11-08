import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import DatePicker from "react-date-picker";
import { IsLoggedIn } from "../components/IsLoggedIn";
import { GET_TOUR_BY_NAME, GET_CART_ITEMS } from "../../api/queries";
import { TOGGLE_CART } from "../../api/mutations";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { NavLink } from "react-router-dom";

import Swal from "sweetalert2";

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
};

export function TourDescriptionScreen() {
  const { data: tour, loading: loadingTours, error: errorTours } = useQuery(
    GET_TOUR_BY_NAME,
    {
      variables: {
        name: new URLSearchParams(window.location.search).get("tour")
      }
    }
  );
  const { data: cartItems, loading: loadingCart, error: errorCart } = useQuery(
    GET_CART_ITEMS
  );

  if (loadingTours || loadingCart) {
    Swal.fire({
      position: "center",
      type: "success",
      title: "Cargando tour...",
      showConfirmButton: false,
      timer: 1500
    });
    return null;
  }
  if (errorTours || errorCart) {
    Swal.fire({
      type: "error",
      title: "Oops...",
      text: "Ocurrió un error",
      footer: "<a href>Intente más tarde</a>"
    });
    return null;
  }

  if (tour && cartItems)
    return (
      <TourDescription
        tour={tour.getTourByName}
        cartItems={cartItems.cartItems}
      />
    );
}

export function ActionButton({ tour, startDate, quantity }) {
  const [addToCart, { loading, error }] = useMutation(TOGGLE_CART, {
    variables: { tour, quantity, startDate },
    refetchQueries: [
      {
        query: GET_TOUR_BY_NAME,
        variables: { name: tour.name }
      }
    ]
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;
  return (
    <div>
      <IsLoggedIn
        true={
          <Button
            onClick={addToCart}
            variant="outline-dark"
            style={{ width: "160px" }}
          >
            {tour.isInCart ? "Borrar del carrito" : "Agregar al carrito"}
          </Button>
        }
      >
        <NavLink to="/login">
          <Button variant="outline-dark" style={{ width: "160px" }}>
            Favor de Iniciar Sesion Primero
          </Button>
        </NavLink>
      </IsLoggedIn>
    </div>
  );
}

class TourDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      quantity: 0
    };
  }

  onChange = (date) => this.setState({ date });

  handleSelectOnChange(quantity) {
    this.setState({ quantity: quantity.target.value })
  }

  render() {
    const options = [];
    for (let i = 1; i < 11; i += 1) {
      options.push(i);
    }
    return (
      <StyledContainer>
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <img src={this.props.tour.photo} style={PhotoStyle} alt="tour" />
          </Col>

          <Col>
            <h4 style={TitleStyle}>{this.props.tour.name}</h4>
            <p style={PriceStyle}>${this.props.tour.price}</p>
            <p style={Pstyle}>
              Descripción del Tour 1: Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum
            </p>
            <Form>
              <Form.Group controlId="exampleForm.ControlPeople">
                <Form.Label>Número de Personas</Form.Label>
                <Form.Control onChange={(e) => this.handleSelectOnChange(e)} as="select" style={{ maxWidth: "160px" }}>
                  {options.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlDate">
                <Form.Label>Fecha</Form.Label>
                <br></br>
                <DatePicker onChange={this.onChange} value={this.state.date} />
              </Form.Group>
              <br></br>
              <ActionButton tour={this.props.tour} startDate={this.state.date.toString()} quantity={this.state.quantity} />
            </Form>
          </Col>
        </Row>
      </StyledContainer>
    );
  }
}
