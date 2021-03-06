import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
/*import Axios from 'axios';*/
/*import Rank from './components/Rank/Rank';*/

import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
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

//initailizing the api key for clariai API into the app costant
const app = new Clarifai.App({
 apiKey: 'fc7c0cc2d0aa46ee88f114978cb51e20'
});


class App extends Component {

  constructor(){
    super();
    this.state = {
       input: '',
       image_url: '',
       box: {},
       image_upload: null,
       file: '',
       imagePreviewUrl: ''
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width =  Number(image.width);
    const height = Number(image.height);

    return {
      leftColumn: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightColumn: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }

  onFileSelected = (event) => {

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
       this.setState({ 
        file: file,
        imagePreviewUrl: reader.result
       })
    }
    
    console.log(reader.readAsDataURL(file))
    
  }

  displayFaceBox = (box) => {
     console.log(box);
     this.setState({ box: box})
  }

  onInputChange = () => {
      this.setState({ input: this.state.image_upload});
  }

  onSubmitClick = (event) => {

    this.setState({ image_url: this.state.input });

      app.models.predict(
        Clarifai.FACE_DETECT_MODEL, //setting the model type from the Clarifai API
        this.state.input) // setting the paramaters to send of the API
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));

     /*console.log(event.target.value); */

  }

  render() {
    return (
      <div className="App">
           <Particles className='particles'
              params={particleOptions}
            />

      <Navigation/>
     
      <FaceRecognition box={this.state.box} imagePreviewUrl={this.state.imagePreviewUrl}/>  
      <ImageLinkForm onFileSelected={this.onFileSelected} onInputChange = {this.onInputChange} onSubmitClick={this.onSubmitClick}/>
   
      </div>
    );
  }
}

export default App;
