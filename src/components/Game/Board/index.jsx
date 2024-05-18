import Square from "./Square";
import { calculateWinner } from "../../../utils/board";
import "./style.css";

const Board = ({ xIsNext, squares, onPlay }) => {
  const winner = calculateWinner(squares);
  const turn = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    if (squares[i] || winner) return;

    const nextSquares = squares.slice(); // [...squares]
    nextSquares[i] = turn;
    onPlay(nextSquares);
  };

  return (
    <>
      <h2>{winner ? `Ganador: ${winner}` : `Siguiente turno: ${turn}`}</h2>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
