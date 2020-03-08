import React, { Component } from "react";
import ReactPlayer from 'react-player'

class PressPage extends Component {
  render() {
    var wrapper = {
      position: 'relative',
      paddingTop: '56.25%',
    };
    var player = {
      position: 'absolute',
      top: '0',
      left: '0',
    };
    return (
      <div>
        <div className="mw9 center bb bw1 b--black-05 pt2 pb4-ns pb2 mb6-ns mb3 relative">
          <h1 className="f1 f-headline-l lh-solid mb1 athelas fw9">Press</h1>
        </div>

        <div className="mw8 center mv5 bb bw1 b--black-05 pb5 cf relative">
          <div className="fl w-60-ns pa2">
            <h1 className="f1 lh-copy-ns mb3 mt0 dib mr3 athelas">Interview with Fashion Designer Melissa Calamia</h1>
            <a href="https://www.youtube.com/watch?v=1DJO0HA5jRo&t=2468s&app=desktop" className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray lh-copy f5-ns avenir" target="_black">Watch</a>
          </div>
          <div className="fl w-100 w-40-ns pa2">
            <div style={wrapper}>
              <ReactPlayer 
                url='https://www.youtube.com/embed/1DJO0HA5jRo'
                width='100%'
                height='100%'
                style={player}
              />
            </div>
          </div>
        </div>

        <div className="mw8 center mv5 bb bw1 b--black-05 pb5 cf relative">
          <div className="fl w-60-ns pa2">
            <h1 className="f1 lh-copy-ns mb3 mt0 dib mr3 athelas">Alumni Update: Melissa Calamia</h1>
            <a href="https://fashionschooldaily.com/24896/alumni-update-melissa-calamia/" className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray lh-copy f5-ns avenir" target="_black">Read</a>
          </div>
          <div className="fl w-40-ns pa2">
            <img src="https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_webp/https://fashionschooldaily.com/wp-content/uploads/2013/07/JPG.jpg" />
          </div>
        </div>

        
      </div>
    );
  }
}

export default PressPage;
