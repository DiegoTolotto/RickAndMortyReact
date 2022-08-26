import  React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import Pagination from "./Pagination/Pagination";

export default function Catalogo() {

    const [cards, setCards] = useState([])
    const [info, setInfo] = useState({})

    const urlInc = `https://rickandmortyapi.com/api/character`

    const getApi = (url) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setCards(data.results);
                setInfo(data.info);
            })
            .catch((erro) => console.log(erro));
    };

    const onPrevious = () => {
        getApi(info.prev)
    }

    const onNext = () => {
        getApi(info.next)
    }

    useEffect(() => {
        getApi(urlInc);
        ;
    }, []);

    return (
        <>
       <Pagination 
            prev={info.prev} 
            next={info.next} 
            onPrevious={onPrevious} 
            onNext={onNext}/>
       <Card cards={cards}/>
       <Pagination 
            prev={info.prev} 
            next={info.next} 
            onPrevious={onPrevious} 
            onNext={onNext}/>
       </>
    )
};