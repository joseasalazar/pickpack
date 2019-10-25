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
        <p className="card-text text-secondary">{props.type}</p>
        <p className="card-text">${props.price}</p>
      </div>
    </div>
  );
};

export default TourCard;
