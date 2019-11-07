import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import TourCard from "../components/TourCard";
import { GET_TOURS } from "../../api/queries";
import { useQuery } from "@apollo/react-hooks";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const StyledRow = styled(Row)`
  padding: 50px;
  margin: auto;
  box-sizing: border-box;
  min-width: 300px;
`;

const TitleStyle = {
  textAlign: "center",
  fontWeight: "300",
  fontSize: "50px",
  marginBottom: "20px",
  marginTop: "20px"
};

const buttonStyle = {
  border: "0px",
  backgroundColor: "white",
  textDeocration: "none"
};

export function TourScreen() {
  const { data, loading, error } = useQuery(GET_TOURS);
  if (loading) {
    Swal.fire({
      position: "center",
      type: "success",
      title: "Cargando tours...",
      showConfirmButton: false,
      timer: 1500
    });
    return null;
  }
  if (error) {
    Swal.fire({
      type: "error",
      title: "Oops...",
      text: "Ocurrió un error",
      footer: "<a href>Intente más tarde</a>"
    });
    return null;
  }
  if (data) return <Tours tours={data.tours} />;
}

export class Tours extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tours: [],
      redirect: false
    };
  }

  componentDidMount() {
    this.setState({ tours: this.props.tours });
  }

  //la ruta seria tours/info/?tour={tourId}
  render() {
    return (
      <div>
        <Container>
          <h1 style={TitleStyle}>Tours y Actividades</h1>
          <StyledRow>
            {this.state.tours.length > 0 ? (
              this.state.tours.map((tour, index) => {
                return (
                  <Col key={index} className="col-md-4">
                    <NavLink
                      style={buttonStyle}
                      to={`tours/info/?tour=${tour.name}`}
                    >
                      <TourCard
                        name={tour.name}
                        description={tour.description}
                        price={tour.price}
                        image={tour.photo}
                        type={tour.type}
                      />
                    </NavLink>
                  </Col>
                );
              })
            ) : (
              <p>No hay tours</p>
            )}
          </StyledRow>
        </Container>
      </div>
    );
  }
}
