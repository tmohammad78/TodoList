import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { addStar } from "../../../../../services/board/action";
import { Switch, Route, Link } from "react-router-dom";

const Item = ({ item, route }) => {
  const dispatch = useDispatch();
  const [saved, setSaved] = useState(false);
  const handleStarBoard = () => {
    console.log(item);
    item.saved = true;
    console.log(item);

    setSaved((prevState) => {
      return !prevState;
    });
    dispatch(addStar(item, setSaved));
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
          <span className="board-name">{item.title}</span>
          <div className="board-details">
            <span className="star-icon">
              <button
                className={"btn-" + `${saved ? "save" : ""}`}
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
