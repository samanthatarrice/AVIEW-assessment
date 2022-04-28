import React from 'react';

// src/index.css';

const Card = ({ cardImg, cardAlt, cardTitle, cardText }) => {
  return (
    <article>
      <img src={cardImg} alt={cardAlt} />
      <h3>{cardTitle}</h3>
      <p>{cardText}</p>
    </article>
  )
}

export default Card;