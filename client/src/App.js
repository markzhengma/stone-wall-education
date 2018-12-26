import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div>
          This is the home page!
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
