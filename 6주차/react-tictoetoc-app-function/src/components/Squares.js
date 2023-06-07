import { Component } from "react";
import "./Squares.css";

export default class Squares extends Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          this.props.clickBtn();
        }}
      >
        {this.props.value}
      </button>
    );
  }
}
