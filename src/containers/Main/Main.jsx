import React, { Component } from 'react';
import './Main.scss';

import Home from '../Home';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <Home />
      </div>
    );
  }
}

export default Main;
