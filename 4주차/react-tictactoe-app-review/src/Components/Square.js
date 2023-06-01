import React, { Component } from "react";
import "./Square.css";

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [...Array(9).keys()],
    };
  }

  render() {
    const idx = this.props.value;

    return (
      <button
        className="square"
        onClick={() => {
          this.setState({ squares: "X" });
        }}
      >
        {this.state.squares[idx]}
      </button>
    );
  }
}
