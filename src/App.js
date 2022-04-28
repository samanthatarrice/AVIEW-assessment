import React, {  } from 'react';

import Card from './components/Card';

//Image Files:
import hands from './images/Saly-31.png';
import calendar from './images/Saly-42.png'

const App = () => {

  const container = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    height: '100vh'
  }

  return (
    <div style={container}>
      <Card 
        cardImg={calendar} 
        cardAtl={'calendar clipart'}
        cardTitle={'Fast & Easy'} 
        cardDescription={'AVIEW guarantees a 24-hour turnaround on subtitle and 48 hours on dubbed content.'}
        padding={43} 
      />
      <Card
        cardImg= {hands}
        cardAtl={'hands connecting out of mobile phones clipart'}
        cardTitle={'Flexible'} 
        cardDescription={'We offer a personalized payment plan and tailor our process to your needs.'} 
        padding={0}
      />
    </div>
  );
}

export default App;

