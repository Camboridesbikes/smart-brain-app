import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/facerecognition/FaceRecognition';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/rank/Rank';
import './App.css';

const app = new Clarifai.App({
 apiKey: 'f64e4e2d09644455971807f31c66d9ba'
});

const particlesOptions ={
  "particles": {
    "number": {
      "value": 20,
      "density": {
        "enable": true,
        "value_area": 721.0787337857429
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
  "retina_detect": true
}}

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

onInputChange = (event) => {
  console.log(event.target.value);
  this.setState({input: event.target.value})
}

onButtonSubmit = () => {
  this.setState({imageUrl: this.state.input});
  app.models.predict(
    Clarifai.COLOR_MODEL,
    this.state.input)
  .then(resp => {
    // do something with response
    console.log(resp);
    },
    function(err) {
      console.log('Error!', err);
    }
  );
  console.log(this.state.input, this.state.imageUrl);
}

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
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
