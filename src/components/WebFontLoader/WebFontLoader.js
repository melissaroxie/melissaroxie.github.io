import React, { Component } from "react";

export default class WebfontLoader extends Component {
  componentDidMount() {
    const WebFont = require(WebfontLoader);
    WebFont.load({
      google: {
        families: ["Open Sans:400,600,700"] // http://thenewcode.com/878/Slash-Page-Load-Times-With-CSS-Font-Subsetting
      },
      classes: false,
      events: false,
      timeout: 1000 // 1 second timeout on font async load
    });
  }
  render() {
    return null;
  }
}
