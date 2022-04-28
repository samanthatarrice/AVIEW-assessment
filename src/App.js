import React from 'react';

import Card from './components/Card';

//Image Files:
import calendar from './images/Saly-31.png';
import hands from './images/Saly-42.png'

const App = () => {
  return (
    <>
      <Card 
        cardImg= {calendar} 
        cardAtl={'calendar clipart'}
        cardTitle={'Fast & Easy'} 
        cardText={'AVIEW guarantees a 24-hour turnaround on subtitle and 48 hours on dubbed content.'} 
      />
      <Card
        cardImg= {hands}
        cardAtl={'hands connecting out of mobile phones clipart'}
        cardTitle={'Flexible'} 
        cardText={'We offer a personalized payment plan and tailor our process to your needs.'} 
      />
    </>
  );
}

export default App;
