import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/rank/Rank';
import './App.css';

const particlesOptions ={
  "particles": {
    "number": {
      "value": 20,
      "density": {
        "enable": true,
        "value_area": 721.0787337857429
      }
    },
  //   "color": {
  //     "value": "#ffffff"
  //   },
  //   "opacity": {
  //     "value": 0.5,
  //     "random": false,
  //     "anim": {
  //       "enable": false,
  //       "speed": 1,
  //       "opacity_min": 0.1,
  //       "sync": false
  //     }
  //   },
  //   "size": {
  //     "value": 3,
  //     "random": true,
  //     "anim": {
  //       "enable": false,
  //       "speed": 3.2,
  //       "size_min": 0.1,
  //       "sync": false
  //     }
  //   },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
  //   "move": {
  //     "enable": true,
  //     "speed": 3,
  //     "direction": "none",
  //     "random": false,
  //     "straight": false,
  //     "out_mode": "out",
  //     "bounce": false,
  //     "attract": {
  //       "enable": false,
  //       "rotateX": 600,
  //       "rotateY": 1200
  //     }
  //   }
  // },
  "retina_detect": true
}}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles
          className='particles'
          params={particlesOptions}
         />
      <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {  /*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
