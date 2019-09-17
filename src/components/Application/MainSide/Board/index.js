import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import "./Board.scss";

const Board = () => {
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
  console.log(boardName);
  return (
    <div className="board-section">
      <div className="board">
        <ul>
          {boardName.map((item) => {
            const test = item.image;
            return (
              <li
                className="board-item"
                style={{
                  backgroundImage: test
                }}
                className="board-item"
              >
                <Link>
                  <div className="clearfix">
                    <span className="board-name">{item.name}</span>
                    <div className="board-details">
                      <span className="star-icon">
                        <button
                          className={"btn-" + `${saveBoard ? "save" : ""}`}
                          style={{
                            padding: "7px 0px"
                          }}
                          onClick={handleSaveBoard}
                        >
                          <i class="far fa-star"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Board;
