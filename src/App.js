import React, { Component } from 'react';
import Navbar from './components/Nav/Navbar';
import './App.css';
import Routes from './Routes';
import Footer from './components/Footer/Footer';


class App extends Component {
  render() {
    return (
        <div className="App">
          <Navbar />
          <Routes />
          <Footer />
        </div>
    );
  }
}

export default App;
