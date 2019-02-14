import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import ResourcePage from './Components/ResourcePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path = "/" render = {() => <Home/>}/>
          <Route exact path = "/resource" render = {() => <ResourcePage/>}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
