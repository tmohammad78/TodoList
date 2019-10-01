// import React, { useEffect } from "react";
// import ReactDOM from "react-dom";

// const Portal = (props) => {
//   let el;
//   useEffect(() => {
//     const modalRoot = document.getElementById("modal");
//     el = document.createElement("div");
//     modaloot.appendChild(el);
//     returRn function cleanup() {
//       modalRoot.removeChild(el);
//     };
//   });
//   if (el === undefined) {
//     return null;
//   }
//   return ReactDOM.createPortal(props.children,el);
// };

// export default Portal;

// import React from "react";
// import ReactDOM from "react-dom";

// class Portal extends React.Component {

//   constructor(props) {
//     super(props);
//     this.elem = document.createElement("div");
//   }

//   componentDidMount() {
//     this.element = document.querySelector(this.props.selector);
//     this.element.appendChild(this.elem);
//   }
//   componentWillUnmount() {
//     this.element.removeChild(this.elem);
//   }
//   render() {
//     return ReactDOM.createPortal(this.props.children, this.elem);
//   }
// }
// export default Portal;

import React from "react";
import ReactDOM from "react-dom";

class Portal extends React.Component {
  componentDidMount() {
    this.element = document.querySelector("#modal");
  }

  render() {
    if (this.element === undefined) {
      return null;
    }

    return ReactDOM.createPortal(this.props.children, this.element);
  }
}
export default Portal;
