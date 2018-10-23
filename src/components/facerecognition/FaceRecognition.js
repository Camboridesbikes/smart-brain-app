import React from 'react';

const FaceRecognition = ({imageUrl}) => {
  return(
  <div className='center'>
    <img src={imageUrl} alt="to be recognized"/>
  </div>
  );
}

export default FaceRecognition;
