import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <div className="home">Welcome</div>
        <div className="about">Gene Hall</div>
        <div className="projects">MoodJournal</div>
        <div className="contact">Contact Me</div>
      </div>
    );
  }
}

export default Main;
