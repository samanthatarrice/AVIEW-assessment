import React from 'react';

const Card = ({ cardImg, cardAlt, cardTitle, cardDescription, padding }) => {
  return (
    <div className='gradientBorder'>
      <article>
        <div className='gradientBackground'>
          <img 
            src={cardImg} 
            alt={cardAlt} 
            style={{ marginTop: padding }}/>
          <div className='text'>
            <h3>{cardTitle}</h3>
            <p>{cardDescription}</p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Card;