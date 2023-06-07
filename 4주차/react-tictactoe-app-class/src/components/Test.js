import React, { Component } from "react";

export default class Test extends Component {
  constructor(props) {
    super(props);
    console.log(this.props); // undefined
  }

  render() {
    console.log(this.props);
    // A가 잘 들어간다.
    return <div>TEST</div>;
  }
}
