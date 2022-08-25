import  React from "react";
import "./Card.css"

export default function Card({ cards }) {
  return (
    <div className="card">
      {cards.map((itens, index) => (
        <div key={index} className="card-info">
        <div className="card-item" style={{ minWidth: "200px" }}>
          <img className="card-img" src={itens.image} alt="character" />
          <div className="card-body">
            <h5 className="card-title">{itens.name}</h5>
            <hr />
            <p className="card-text">Species: {itens.species}</p>
            <p className="card-text">Location: {itens.location.name}</p>
          </div>
        </div>
      </div>
    ))}
    </div>
  )
};