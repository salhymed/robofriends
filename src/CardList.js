import React from 'react';
import Card from './Card';
import robots from './robots';

const cards = robots.map((r, i) => {
        return <Card 
        key={i}
        title={r.roboName} 
        desc={r.desc}
        />;
    });

const CardList = () => {
    return (
        <div>
            {cards}
        </div>
    ); 
}
export default CardList;