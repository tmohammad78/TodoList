import React  , { useEffect } from "react";
import ReactDOM from 'react-dom';

import "./modal.scss";

const Modal = (props) => {
  const modalRoot=document.getElementById('modal-root');
  const el = document.createElement("div");

  useEffect(()=>{

    modalRoot.appendChild(el);
    return function cleanup(){
        modalRoot.removeChild(el);
    }
  });

  return ReactDOM.createPortal(props.children, el);
};

export default Modal;
