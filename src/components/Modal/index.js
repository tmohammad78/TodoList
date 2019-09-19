import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./Modal.scss";

const Modal = ({
  Route,
  onClose,
  closeOnEsc,
  history,
  style,
  children,
  ...props
}) => {
  useEffect(() => {
    if (closeOnEsc) {
      document.addEventListener("keydown", handleEscKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleEscKeyDown);
    };
  });
  const handleEscKeyDown = (e) => {
    if (onClose && closeOnEsc && e.keyCode === 27) {
      clodeModal();
    }
  };
  const closeModal = () => {
    Route ? history.goBack() : onClose();
  };

  return (
    <div className="parent">
      <div className="modalBox" style={style}>
        <div className="wrapper">
          <div className="ancBox">
            <div className="img" onClick={closeModal}>
              <div className="icon-cross" />
            </div>
          </div>
          <div className="operation">{children}</div>
        </div>
      </div>
      <div className="lightBox" onClick={closeModal}></div>
    </div>
  );
};
export default withRouter(Modal);

//onClick={props.toggleModal}
