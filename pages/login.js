import React from "react";
import Portal from "../src/components/Portal";
import Modal from "../src/components/Modal";
import Header from "../src/components/layout/Header";
import LoginPortal from "../src/components/Portal/Login";
import Main from "../src/components/Main";

const Login = () => {
  return (
    <Header>
      <Main>
        <Portal selector="#modal">
          <Modal Route>
            <LoginPortal />
          </Modal>
        </Portal>
      </Main>
    </Header>
  );
};
export default Login;
