import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReadBoard } from "../../../../services/board/action";

import axiso from "axios";
// import 'antd/es/button/style/css';
import Item from "./item";
import "./Board.scss";

const Board = (props) => {
  const [saveBoard, setSaveBoard] = useState([]);
  const dispatch = useDispatch();
  const handleSaveBoard = (e) => {
    e.preventDefault();
    // setSaveBoard((prevState) => {
    //   return !prevState;
    // });
    // dispatch(saveBoard());
  };
  useEffect(() => {
    dispatch(ReadBoard());
  }, []);

  const boardName = useSelector((state) => state.board.object);
  // const starBoard = useSelector((state) => state.board.starBoard);

  // console.log("starBoard", starBoard);
  const rowBoard = [];
  // const rowStarBoard = [];
  if (boardName) {
    Object.values(boardName).forEach((item) => {
      // if (item.saved) {
      //   setSaveBoard((oldArray) => [...oldArray, item]);
      // }
      rowBoard.push(<Item item={item} route={props} />);
    });
  }

  // if (starBoard) {
  //   starBoard.forEach((item) => {
  //     rowStarBoard.push(<Item item={item} />);
  //   });
  // }
  return (
    <div className="board-section">
      <div className="board">
        <div className="icon-plus" />
        {saveBoard ? (
          <div>
            <h2>Star Board</h2>
            {saveBoard.map((item, i) => {
              return <ul>{item}</ul>;
            })}
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
