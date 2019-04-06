import React, { Component } from 'react';
import Youtube from 'react-youtube';
import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onReady = this.onReady.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  onReady(e) {
    e.target.mute();
  }

  onEnd(e) {
    e.target.playVideo();
  }

  render() {
    const videoOptions = {
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0
      }
    };

    return (
      <section className="home">
        <div className="content">
          <h1>
            Hello, I'm <span className="name">Gene Hall.</span>
          </h1>
          <h2>I'm a full-stack web developer.</h2>
          <button className="btn">View my work</button>
        </div>
        <div className="video-background">
          <div className="video-foreground">
            <Youtube
              videoId="OUiWHg_A24Y"
              opts={videoOptions}
              className="video-iframe"
              onReady={this.onReady}
              onEnd={this.onEnd}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
