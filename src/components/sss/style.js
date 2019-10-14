import React from "react";
import styled from "styled-components";

const WrapperP = styled.div`
  width: 100px;
  background: red;
`;
export const Wrapper = ({ children }) => {
  return <WrapperP>{children}</WrapperP>;
};
