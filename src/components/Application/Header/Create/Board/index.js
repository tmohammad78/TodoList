import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Board.scss";

import { addBoard } from "../../../../../services/board/action";
import Button from "../../../../Button";

const Board = ({ handleModal }) => {
  const [boardValue, setBoardValue] = useState("");
  const [template, setTemplate] = useState(false);

  const dispatch = useDispatch();
  const submit = () => {
    handleModal(), dispatch(addBoard(boardValue, template));
  };
  const handleValue = (e) => {
    setBoardValue(e.target.value);
  };
  const handleCheck = (e) => {
    console.log(e.target.style.backgroundImage);
    setTemplate(e.target.style.backgroundImage);
  };
  return (
    <div>
      <input type="text" value={boardValue} onChange={handleValue} />
      <label htmlFor="checkbox" className="custom-checkbox">
        <input
          type="checkbox"
          className="styled_checkbox"
          // checked={template}
          style={{
            backgroundImage:
              "url(" +
              "https://images.unsplash.com/photo-1568587672698-565c855c355c?ixlib=rb-1.2.1…80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjcwNjZ9" +
              ")"
          }}
          onChange={handleCheck}
          id="checkbox"
        />
        <div
          className="checkBack"
          style={{
            backgroundImage:
              "url(" +
              "https://images.unsplash.com/photo-1568587672698-565c855c355c?ixlib=rb-1.2.1…80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjcwNjZ9" +
              ")"
          }}
        >
          <span />
        </div>
      </label>
      <label htmlFor="checkbox2" className="custom-checkbox">
        <input
          type="checkbox"
          className="styled_checkbox"
          style={{
            backgroundImage:
              "url(" +
              "https://images.unsplash.com/photo-1568473648251-3a0c3aa56192?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjcwNjZ9" +
              ")"
          }}
          onChange={handleCheck}
          id="checkbox2"
        />
        <div
          className="checkBack"
          style={{
            backgroundImage:
              "url(" +
              "https://images.unsplash.com/photo-1568473648251-3a0c3aa56192?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjcwNjZ9" +
              ")"
          }}
        >
          <span />
        </div>
      </label>
      <button onClick={submit}>submit</button>
    </div>
  );
};
export default Board;
