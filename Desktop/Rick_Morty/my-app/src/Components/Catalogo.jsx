import { React, useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";


 

export default function Catalogo() {

    const [cards, setCards] = useState([])
    console.log(cards)

    const getApi = () => {
        fetch(`https://rickandmortyapi.com/api/character`)
        .then(res => res.json())
        .then(data => setCards(data.results))
        .catch((erro) => console.log(erro));
    };  

    useEffect(() => {
        getApi();
    }, []) ;
    
    return (
       <Card cards={cards}/>
    )
};