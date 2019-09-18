import React from "react";

const Test = ({ item }) => {
  return (
    <div style={{
      backgroundImage:item.image
    }}>
      {item.name}
    </div>
  );
};
export default Test;
