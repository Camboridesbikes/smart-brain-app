import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
  return !imageUrl ?
    <div className='center ma'>
      <p className='f4'>Paste a link to your picture's URL in the box.</p>
    </div>
   :
  (
  <div className='center ma'>
    <div className='absolute mt2'>
        <img id='inputimage' src={imageUrl} alt="Recognize Face" width='500px' height='auto'/>
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
    </div>

  </div>
  );
}

export default FaceRecognition;
