import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import TourPhoto from "../assets/paris.jpeg";
import DatePicker from "react-date-picker";

import { GET_TOUR_BY_NAME, GET_CART_ITEMS } from "../../api/queries";
import { TOGGLE_CART } from "../../api/mutations";
import { useQuery, useMutation } from "@apollo/react-hooks";

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

export function ActionButton({ id, isincart, name }) {
  const [addToCart, { loading, error }] = useMutation(TOGGLE_CART, {
    variables: { tourId: id, startDate: "19/10/10", quantity: 1 },
    refetchQueries: [
      {
        query: GET_TOUR_BY_NAME,
        variables: { name: name }
      }
    ]
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;
  return (
    <div>
      <Button
        onClick={addToCart}
        variant="outline-dark"
        style={{ width: "160px" }}
      >
        {isincart === "false" ? "Agregar al carrito" : "Borrar del carrito"}
      </Button>
    </div>
  );
}

class TourDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  onChange = date => this.setState({ date });

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
                <Form.Control as="select" style={{ maxWidth: "160px" }}>
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
              {/* <Button
                onClick={() => this.addToShoppingCart()}
                variant="outline-dark"
                style={{ width: "160px" }}
              >
                Agregar al carrito
              </Button> */}
              <ActionButton
                id={this.props.tour.tourId}
                isincart={this.props.tour.isInCart.toString()}
                name={this.props.tour.name}
              />
            </Form>
          </Col>
        </Row>
      </StyledContainer>
    );
  }
}
