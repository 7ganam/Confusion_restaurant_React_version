import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Main from './components/MainComponent';


import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';

import { DISHES } from './shared/dishes'

import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );


  }
}

export default App;
