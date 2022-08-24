import  React from "react";

export default function Card({ cards }) {
  return (
    <div className="card">
      {cards.map((itens, index) => (
        <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
        <div className="card" style={{ minWidth: "200px" }}>
          <img className="card-img-top" src={itens.image} alt="character" />
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