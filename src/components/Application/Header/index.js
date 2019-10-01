import React, { useEffect, useState } from "react";
import Modal from "../../Modal";
import Portal from "../../Portal";
import "./Header.scss";
import Board from "./Create/Board";

const Header = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const handleModal = () => {
    setToggleModal((prevstate) => {
      return !prevstate;
    });
  };

  return (
    <div className="app_header clearfix">
      <div className="wrapper">
        {/* <div className="app_logo">
          <div className="img">
            <Logo />
          </div>
        </div> */}
        <div className="left"></div>
        <div className="right">
          <button className="btn-icon icon " onClick={handleModal}>
            <div className="icon-plus" />
          </button>
          {/* {toggleModal ? (
            // <Modal title="create" handleModal={handleModal}>
            <Portal>
              <Modal onClose={handleModal}>
                <Board />
              </Modal>
            </Portal>
          ) : // </Modal>
          null} */}
        </div>
      </div>
    </div>
  );
};
export default Header;
