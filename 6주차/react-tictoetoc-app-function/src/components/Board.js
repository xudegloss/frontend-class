import { Component } from "react";
import Squares from "./Squares";
import "./Board.css";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { squares: [...Array(9).fill(null)] };
  }

  // 버튼을 클릭하였을 때, 엑스 표시가 되도록 만들어야 한다. (숫자는 보이지 않게 만들어주기.)

  // 리액트의 생명주기
  // 1. 복사를 한다. (Mount?)
  // 2. 변경되어야 하는 부분을 변경한다. (Update?)
  // 3. 덮어쓴다. (UnMount?)

  // 덮어 쓴 결과는 squares이고 squares에서 X 표기가 된다.
  // 덮어 쓰는 과정은 handleClick 이라는 함수이고, 덮어서 써준다.

  handleClick = (i) => {
    const newSquares = this.state.squares.slice();
    newSquares[i] = "X";
    this.setState({ squares: newSquares });
  };

  renderSquare(i) {
    return (
      <Squares
        value={this.state.squares[i]}
        clickBtn={() => {
          this.handleClick(i);
        }}
      />
    );
  }

  render() {
    const status = "New Player : X, O";
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
