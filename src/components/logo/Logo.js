import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './logo.css';

const Logo = () => {
  return(
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
        <div className="Tilt-inner">
          <img style={{paddingTop: '8px', height: 70, width: 70}}src={brain} alt="brain logo"/> 
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
