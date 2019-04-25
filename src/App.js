import React, { Component } from 'react';
import Navbar from './components/Nav/Navbar';
import './App.css';
import Routes from './Routes';


class App extends Component {
  render() {
    return (
        <div className="App">
          <Navbar />
          <Routes />
        </div>
    );
  }
}

export default App;
