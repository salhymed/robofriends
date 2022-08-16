import React from "react";
import Card from "./Card";

const CardList = ({listrobots}) => {
    const cards = listrobots.map((r, i) => {
        return <Card key={i} name={r.name} email={r.email} />;
        });
    
    return <div>{cards}</div>;
};

export default CardList;
