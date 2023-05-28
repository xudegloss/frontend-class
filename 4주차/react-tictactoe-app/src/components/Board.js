import React, { Component } from "react";
import Square from "./Square";
import "./Board.css";

export default class Board extends Component {
  // 초기 지정하기.
  // State 의미한다.
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  // renderSquare 함수 : Square Component 가져오기.
  // 반복성이 높아서, Square 자체를 Component로 제작한 것이다.
  renderSquare(i) {
    return <Square value={this.state.squares[i]} />;
  }

  // this는 class Board를 가르킨다.
  render() {
    const status = "New player: X, O";
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
