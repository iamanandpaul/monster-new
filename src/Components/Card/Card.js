import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h2>{props.monster.name}</h2>
      <p>Email: {props.monster.email} </p>
      <p> Website: {props.monster.website} </p>
    </div>
  );
}

export default Card;
