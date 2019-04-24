import React, { Component } from 'react';

import './App.css';
import Navbar from './components/Nav/Navbar';
import AppWrapper from './components/AppWrapper/AppWrapper';


class App extends Component {
  render() {
    return (
   
        <div className="App">
          <Navbar />
          <AppWrapper />
      </div>

    );
  }
}

export default App;
