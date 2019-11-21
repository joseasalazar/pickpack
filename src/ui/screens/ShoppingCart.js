import React from "react";
import styled from "styled-components";
import { Table, Image, Container, Button } from "react-bootstrap";
import Trash from "../assets/trash.png";
import { GET_CART_ITEMS, GET_TOUR_BY_NAME } from "../../api/queries";
import { TOGGLE_CART } from "../../api/mutations";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Swal from "sweetalert2";
import Moment from "react-moment";

const StyledContainer = styled.div`
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 40px;
`;

const TitleStyle = {
  textAlign: "center",
  fontWeight: "300",
  fontSize: "50px",
  marginBottom: "20px"
};

const IconStyle = {
  maxWidth: "20px",
  maxHeight: "20px"
};

const totalStyle = {
  fontWeight: "300",
  fontSize: "20px",
  marginTop: "10px"
};

const dateStyle = {
  textOverflow: "ellipsis",
  maxWidth: "100px"
};

export function CartScreen() {
  const { data, loading, error } = useQuery(GET_CART_ITEMS);

  if (loading) {
    Swal.fire({
      title: "Cargando tours...",
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
    return <ShoppingCart />;
  }
  if (data) {
    Swal.close();
    return <ShoppingCart cartItems={data.cartItems} />;
  }
}

export const DeleteButton = props => {
  const [removeFromCart, { loading, error }] = useMutation(TOGGLE_CART, {
    variables: {
      tour: props.tour,
      quantity: props.quantity,
      startDate: props.startDate
    },
    refetchQueries: [
      {
        query: GET_TOUR_BY_NAME,
        variables: { name: props.tour.name }
      }
    ]
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;
  return (
    <div>
      <Image
        src={Trash}
        alt="Eliminar"
        style={IconStyle}
        onClick={removeFromCart}
      />
    </div>
  );
};

export class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: []
    };
  }

  componentDidMount() {
    this.setState({ cartItems: this.props.cartItems });
  }

  deleteTour(index) {
    var newItems = this.state.cartItems;
    newItems.splice(index, 1);
    this.setState({ cartItems: newItems });
    this.forceUpdate();
  }

  checkout() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "¡Compra realizada exitosamente!",
      showConfirmButton: false,
      timer: 1500
    });
    var emptyCart = [];
    this.setState({ cartItems: emptyCart });
    this.forceUpdate();
  }

  updateComponent() {
    this.forceUpdate();
  }

  render() {
    var total = 0;
    return (
      <div>
        <StyledContainer>
          <h2 style={TitleStyle}>Carrito de compra</h2>
        </StyledContainer>
        <Container>
          <Table responsive>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Fecha</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.cartItems !== undefined &&
              this.state.cartItems.length > 0 ? (
                this.state.cartItems.map((item, index) => {
                  var price = item.tour.price * item.quantity;
                  total = total + price;
                  return (
                    <tr>
                      <td>{item.tour.name}</td>
                      <td style={dateStyle}>
                        <Moment format="DD / MM / YYYY">
                          {item.startDate}
                        </Moment>
                      </td>
                      <td>${item.tour.price}</td>
                      <td>{item.quantity}</td>
                      <td>${price}</td>
                      <td>
                        <Button
                          variant="link"
                          onClick={() => this.deleteTour(index)}
                        >
                          <DeleteButton
                            tour={item.tour}
                            startDate={item.startDate}
                            quantity={item.quantity}
                          />
                        </Button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <th className="text-center" colspan="4">
                    Por el momento no tienes tours en tu carrito
                  </th>
                </tr>
              )}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={totalStyle}>
                  <b>Total: $</b>
                  {total}
                </td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          <Button
            variant="primary"
            className="float-right"
            onClick={this.checkout.bind(this)}
          >
            Comprar
          </Button>
        </Container>
      </div>
    );
  }
}
