import  React from "react";

export default function Card({ cards }) {
  return (
    <div className="card">
      {cards.map((itens, index) => (
        <div key={index} className="col">
          <img src={itens.image} alt=""/>

          <p>Nome: {itens.name}</p>
        </div>
      ))}
    </div>
  )
};