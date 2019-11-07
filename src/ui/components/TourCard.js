import React from "react";
import "./tour-style.css";
import { RoleManager } from "../RoleManager";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const buttonStyle = {
  border: "0px",
  backgroundColor: "white",
  textDeocration: "none"
};

const TourCard = props => {
  return (
    <div>
      <RoleManager role={"customer"}>
        <div className="card text-center tour-card">
          <NavLink style={buttonStyle} to={`tours/info/?tour=${props.name}`}>
            <div className="overflow">
              <img
                src={props.image}
                alt={props.image}
                className="card-img-top tour-card-img"
              />
            </div>
            <div className="card-body text-dark tour-card-body">
              <h4 className="card-title">{props.name}</h4>
              <p className="card-text text-seconday">{props.description}</p>
              <p className="card-text text-secondary">{props.type}</p>
              <p className="card-text">${props.price}</p>
            </div>
          </NavLink>
        </div>
      </RoleManager>
      <RoleManager role={"admin"}>
        <div className="card text-center tour-card">
          <NavLink style={buttonStyle} to={`tours/info/?tour=${props.name}`}>
            <div className="overflow">
              <img
                src={props.image}
                alt={props.image}
                className="card-img-top tour-card-img"
              />
            </div>
          </NavLink>
          <div className="card-body text-dark tour-card-body">
            <h4 className="card-title">{props.name}</h4>
            <p className="card-text text-seconday">{props.description}</p>
            <p className="card-text text-secondary">{props.type}</p>
            <p className="card-text">${props.price}</p>
            <Button onClick={props.onItemClick} variant="danger">
              Eliminar
            </Button>
          </div>
        </div>
      </RoleManager>
    </div>
  );
};

export default TourCard;
