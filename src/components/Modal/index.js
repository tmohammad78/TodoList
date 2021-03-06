import React from "react";
import { withRouter } from "react-router-dom";

import Cancel from "../../assets/cancel.svg";
import "./Modal.scss";

const Modal = (props) => {
  const closeModal = () => {
    props.history.goBack();
  };

  return (
    <div className="parent">
      <div className="modalBox">
        <div className="wrapper">
          <div className="ancBox">
            <div className="img" onClick={closeModal}>
              <Cancel />
            </div>
          </div>
          <div className="operation">{props.children}</div>
        </div>
      </div>
      <div className="lightBox" onClick={closeModal}></div>
    </div>
  );
};
export default withRouter(Modal);

//onClick={props.toggleModal}
