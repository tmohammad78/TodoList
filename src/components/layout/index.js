import React from "react";

const Header = (props) => {
  return (
    <div
      style={{
        width: "200",
        height: "300",
        background: "red"
      }}
    >
      {props.children}
    </div>
  );
};
export default Header;
