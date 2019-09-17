import React from "react";
import Cancel from "../../../assets/cancel.svg";
import "./modal.scss";

const Modal = (props) => {
  return (
    <div className="parent">
      <div className="modalBox">
        <div className="ancBox clearfix">
          <div className="img" onClick={props.handleModal}>
            <Cancel />
          </div>
          <div className="title">{props.title}</div>
        </div>
        <div className="operation">{props.children}</div>
      </div>
      <div className="lightBox" onClick={props.handleModal}></div>
    </div>
  );
};
export default Modal;
