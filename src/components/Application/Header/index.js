import React, { useEffect, useState } from "react";
import Logo from "../../../assets/Logo.svg";
import Plus from "../../../assets/add.svg";
import Modal from "../../Modal/index";
import Button from "../../Button/index";
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
        <div className="app_logo">
          <div className="img">
            <Logo />
          </div>
        </div>
        <div className="left"></div>
        <div className="right">
          <div className="icon" onClick={handleModal}>
            <Plus />
          </div>
          {toggleModal ? (
            <Modal title="create" handleModal={handleModal}>
              <Board handleModal={handleModal} />
            </Modal>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default Header;
