import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {Images} from "./components/Images/Images.js";

class App extends Component {
  state = {
    pics: [
      {
        id: 1,
        url: 'https://parentinghealthybabies.com/wp-content/uploads/2013/12/Winter-fruits-for-Kids-Grapes.jpg'

      },{
        id: 2,
        url:'http://healthbeginswithmom.com/wp-content/uploads/2016/08/apples-300x213.jpg'

      },{
        id: 3,
        url:'https://parentinghealthybabies.com/wp-content/uploads/2013/12/Winter-fruits-for-Kids-Lemon.jpg'

      }
    ]
  };

  clickMe(id){
    console.log(id);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Navbar />
          <h1 className="App-title">It's Clicky Time!</h1>
        </header>
        <p className="App-intro">
          Click on an image to earn points, but don't click on any more than once!
        </p>
        <div>
          {this.state.pics.map(pic => (
          <Images clickMe={this.clickMe} url={pic.url} id={pic.id} />
          ))}

          </div>
      </div>
    );
  }
}

export default App;
