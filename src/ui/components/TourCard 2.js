import React from "react";
import "./tour-style.css";

const TourCard = props => {
  return (
    <div className="card text-center tour-card">
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
        <p clasSName="card-text">{props.price}</p>
        <a href="#" className="btn btn-outline-success">
          Más información
        </a>
      </div>
    </div>
  );
};

export default TourCard;
