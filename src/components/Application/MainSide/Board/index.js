import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
// import 'antd/es/button/style/css';
import Item from "./item";
import "./Board.scss";

const Board = (props) => {
  const [saveBoard, setSaveBoard] = useState(false);
  const dispatch = useDispatch();
  const handleSaveBoard = (e) => {
    e.preventDefault();
    setSaveBoard((prevState) => {
      return !prevState;
    });
    // dispatch(saveBoard());
  };
  const boardName = useSelector((state) => state.board.board);
  const starBoard = useSelector((state) => state.board.starBoard);

  console.log("starBoard", starBoard);
  const rowBoard = [];
  const rowStarBoard = [];
  if (boardName) {
    boardName.forEach((item) => {
      rowBoard.push(<Item item={item} route={props} />);
    });
  }

  if (starBoard) {
    starBoard.forEach((item) => {
      rowStarBoard.push(<Item item={item} />);
    });
  }
  return (
    <div className="board-section">
      <div className="board">
        <div className='icon-plus' />
        {rowStarBoard ? (
          <div>
            <h2>Star Board</h2>
            <ul>{rowStarBoard}</ul>
          </div>
        ) : null}
        {rowBoard ? (
          <div>
            <h2>Board</h2>
            <ul>{rowBoard}</ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Board;
