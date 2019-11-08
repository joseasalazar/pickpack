import React from "react";
import styled from "styled-components";
import { Table, Image } from "react-bootstrap";
import Trash from "../assets/trash.png";
import { GET_CART_ITEMS } from "../../api/queries";
import { useQuery } from "@apollo/react-hooks";
import Swal from "sweetalert2";

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
  maxWidth: "20px"
};

export function CartScreen() {
  const { data, loading, error } = useQuery(GET_CART_ITEMS);

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
      text: error.message,
      footer: "<a href>Intente más tarde</a>"
    });
    return null;
  }
  if (data) return <ShoppingCart cartItems={data.cartItems} />;
}
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

  render() {
    var total = 0;
    return (
      <div>
        <StyledContainer>
          <h2 style={TitleStyle}>Carrito de compra</h2>
        </StyledContainer>
        <Table responsive>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Start Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.cartItems !== undefined &&
              this.state.cartItems.length > 0 ? (
                this.state.cartItems.map((item, index) => {
                  var price = item.tour.price * item.quantity
                  total = total + price;
                  return (
                    <tr>
                      <td>{item.tour.name}</td>
                      <td>${item.tour.price}</td>
                      <td>{item.quantity}</td>
                      <td>${price}</td>
                      <td>{item.startDate}</td>
                      {/* <td>
                        <a href="">
                          <Image src={Trash} alt="Eliminar" style={IconStyle} />
                        </a>
                      </td> */}
                    </tr>

                  );
                })
              ) : (
                <tr>
                  <th className="text-center" colspan="4">Por el momento no tienes tours en tu carrito</th>
                </tr>
              )}
            <tr>
              <p>Total: {total}</p>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
