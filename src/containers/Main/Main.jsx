import React, { Component } from 'react';
import './Main.scss';

import Home from '../Home';
import About from '../../Components/About';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <Home />
        <About />
      </div>
    );
  }
}

export default Main;
