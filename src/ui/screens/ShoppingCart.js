import React from "react";
import styled from "styled-components";
import { Table, Image } from "react-bootstrap";
import Trash from "../assets/trash.png";

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
  };

export class ShoppingCart extends React.Component {
    render() {
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nombre</td>
                            <td>$0.00</td>
                            <td>1</td>
                            <td>$0.00</td>
                            <td><a href=""><Image src={Trash} alt="Eliminar" style={IconStyle}/></a></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}