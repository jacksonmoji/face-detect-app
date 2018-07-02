import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Logo from './components/Logo/Logo';
import Particles from 'react-particles-js';
import './App.css';

const particleOptions = {
  particles: {
    number:{
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
    }
  }
}
class App extends Component {

  constructor(){
    super();
    this.state = {
       input: ''
    }
  }

  onInputChange = (event) => {
      console.log(event.target.value);
  }

  onSubmitClick = (event) => {

     console.log(event.target.value); 

  }

  render() {
    return (
      <div className="App">
           <Particles className='particles'
              params={particleOptions}
            />

      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm onInputChange = {this.onInputChange} onSubmitClick={this.onSubmitClick}/>
      {/*<Logo/>
     
      <FaceRecognition/>*/}
      </div>
    );
  }
}

export default App;
