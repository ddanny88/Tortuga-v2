import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Nav/Navbar';
import Routes from './Routes';
import Footer from './components/Footer/Footer';
import './App.css';


class App extends Component {
  render() {
    // console.log(store.getState())
    return (
        <Provider store={ store }>
          <div className="App">
            <Navbar />
            <Routes />
            {/* <Footer /> */}
          </div>
        </Provider>
    );
  }
}

export default App;
