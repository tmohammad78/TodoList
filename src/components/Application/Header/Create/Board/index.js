import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Board.scss";

import { addBoard } from "../../../../../services/board/action";
import Button from "../../../../Button";

const Board = () => {
  const [boardValue, setBoardValue] = useState("");
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(addBoard(boardValue));
  };
  const handleValue = (e) => {
    setBoardValue(e.target.value);
  };
  return (
    <div>
      <input type="text" value={boardValue} onChange={handleValue} />
      {/* <input type="checkbox" name="fordCheckBox" id="Ford" value="Ford" />
      <label for="Ford"></label> */}
      <button onClick={submit}>submit</button>
    </div>
  );
};
export default Board;
