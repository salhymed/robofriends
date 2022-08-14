import React from 'react';
import './Card.css'
const Card = ({name, email}) => {   
    return (
    <div className="bg-light-blue dib br3 pa2 ma2 grow ">
        <img src={`https://robohash.org/${name}`} alt="pic" />
        <div className="tc">
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div> 
);
}

export default Card;