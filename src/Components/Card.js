import React from 'react';
import './Card.css'
const Card = ({name, email}) => {   
    return (
    <div className="bg-light-blue dib br3 ma2 grow w-24  bg-black-10 tc pv4">
        <img src={`https://robohash.org/${name}`} alt="pic" />
        <div className="tc">
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div> 
);
}

export default Card;