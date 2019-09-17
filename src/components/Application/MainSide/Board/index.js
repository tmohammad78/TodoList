import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

const Board = () => {
  const boardName = useSelector((state) => state.board);
  console.log(boardName.name);
  return (
    <div className="board-section">
      <div className="board">
        <ul>
          {boardName.name.map((item) => {
            return (
              <li className="board-item">
                <button>{item}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Board;
