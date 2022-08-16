import React from "react";
import Card from "./Card";

const CardList = ({listrobots}) => {
    if(true){
        throw new Error('Oh No !');
    }
    const cards = listrobots.map((r, i) => {
        return <Card key={i} name={r.name} email={r.email} />;
        });
    
    return <div>{cards}</div>;
};

export default CardList;
