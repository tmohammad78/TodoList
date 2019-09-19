import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStar } from "../../../../../services/board/action";
import { Switch, Route, Link } from "react-router-dom";

const Item = ({ item, route }) => {
  const dispatch = useDispatch();
  const [star, setStar] = useState(false);
  const handleStarBoard = () => {
    setStar((prevState) => {
      return !prevState;
    });
    dispatch(addStar(item));
  };
  return (
    <li
      className="board-item"
      style={{
        backgroundImage: item.image
      }}
      className="board-item"
    >
      <Link to={`${item.name}`}>
        <div className="clearfix">
          <span className="board-name">{item.name}</span>
          <div className="board-details">
            <span className="star-icon">
              <button
                className={"btn-" + `${star ? "save" : ""}`}
                style={{
                  padding: "7px 0px"
                }}
                onClick={handleStarBoard}
              >
                <i class="far fa-star"></i>
              </button>
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
};
export default Item;
