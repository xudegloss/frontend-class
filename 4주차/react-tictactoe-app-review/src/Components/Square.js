import React, { Component } from "react";
import "./Square.css";

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.state = { squares: [...Array(9).keys()] };
  }

  render() {
    const idx = this.props.value;

    return (
      <button
        className="square"
        onClick={() => {
          // 각각의 인덱스에 따라서 X로 변경해야 한다.
          // this.setState({squares[idx] : "X"}) 는 오류가 뜬다. 왜 뜨는지는 모르겠다.
          // 그래서 새로운 Square를 만들고 변경 후 그 값으로 변경해버린다.
          const newSquares = this.state.squares;
          newSquares[idx] = "X";
          this.setState({ newSquares });
        }}
      >
        {this.state.squares[idx]}
      </button>
    );
  }
}
