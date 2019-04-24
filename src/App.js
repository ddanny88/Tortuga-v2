import React, { Component } from 'react';
import routes from './routes';
import Navbar from './components/Nav/Navbar';
import './App.css';


class App extends Component {
  render() {
    return (
        <div className="App">
          <Navbar />
          { routes }
      </div>

    );
  }
}

export default App;
