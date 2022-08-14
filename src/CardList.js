import React from "react";
import Card from "./Card";

const CardList = ({listrobots}) => {
    const cards = listrobots.map((r, i) => {
        return <Card key={i} title={r.roboName} desc={r.desc} />;
        });
    
    return <div>{cards}</div>;
};

export default CardList;
