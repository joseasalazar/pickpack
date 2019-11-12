import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import TourCard from "../components/TourCard";
import { GET_TOURS } from "../../api/queries";
import { useQuery } from "@apollo/react-hooks";

import Swal from "sweetalert2";

const StyledRow = styled(Row)`
  padding: 50px;
  margin: auto;
  box-sizing: border-box;
  min-width: 300px;
  justify-content: center;
`;

const TitleStyle = {
  textAlign: "center",
  fontWeight: "300",
  fontSize: "50px",
  marginBottom: "20px",
  marginTop: "20px"
};

const NoToursP = styled.p`
  font-size: 2rem;
`;

export function TourScreen() {
  const { data, loading, error } = useQuery(GET_TOURS);
  if (loading) {
    Swal.fire({
      title: "Cargando...",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });
    return null;
  }
  if (error) {
    Swal.fire({
      type: "error",
      title: "Oops...",
      text: error.message,
      footer: "<p>Intente más tarde</p>"
    });
    return <Tours />;
  }
  if (data) {
    Swal.close();
    return <Tours tours={data.tours} />;
  }
}

export class Tours extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tours: []
    };
  }

  componentDidMount() {
    this.setState({ tours: this.props.tours });
  }

  deleteTour(tour) {
    Swal.fire({
      title: "Eliminar tour?",
      text: "Se borrará el tour de la base de datos",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí!"
    }).then(result => {
      if (result.value) {
        var newArr = this.state.tours.filter(
          tours => tours.tourId !== tour.tourId
        );
        this.setState({ tours: newArr });
        Swal.fire("Tour Eliminado!", "El tour se ha eliminado.", "success");
      }
    });
  }

  render() {
    return (
      <div>
        <Container>
          <h1 style={TitleStyle}>Tours y Actividades</h1>
          <StyledRow>
            {this.state.tours !== undefined && this.state.tours.length > 0 ? (
              this.state.tours.map((tour, index) => {
                return (
                  <Col key={index} className="col-md-4">
                    <TourCard
                      name={tour.name}
                      // description={tour.description}
                      price={tour.price}
                      image={tour.photo}
                      type={tour.type}
                      onItemClick={() => this.deleteTour(tour)}
                    />
                  </Col>
                );
              })
            ) : (
              <NoToursP>
                Por el momento no tenemos tours, vuelve pronto!
              </NoToursP>
            )}
          </StyledRow>
        </Container>
      </div>
    );
  }
}
