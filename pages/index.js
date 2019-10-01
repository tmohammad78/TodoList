import React from "react";
import Link from "next/link";
import App from "../src/App";
// import Header from '../src/components/Header';
import Header from "../src/components/layout/Header";
import Main from "../src/components/Main";
import Modal from '../src/components/Modal';
import "../src/styles/main.scss";

const Index = () => {
  return (
    <Header>
      <div>
        {/* <App /> */}
        <Main />
      </div>
    </Header>
  );
};
export default Index;
