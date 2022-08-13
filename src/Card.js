import React from 'react';
import './Card.css'
const Card = ({title, desc}) => {   
    return (
    <div className="bg-light-blue dib br3 pa2 ma2 grow ">
        <img src={`https://robohash.org/${title}`} alt="pic" />
        <div className="tc">
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    </div> 
);
}

export default Card;