import React from 'react';
import Card1 from "./Card.css"

const Card = (props) => {

   // console.log(Data[0].Title)

    const {textTile,desText} = props
    return (
        <div style={Card1} className='card'>
        <h1 className='card-title'>{textTile}</h1>
        <p className='card-des'>{desText}</p>
        <p className='card-footer'>footer</p>
      </div>
    );
};

export default Card;