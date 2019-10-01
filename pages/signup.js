import React from "react";
import Portal from "../src/components/Portal";
import Modal from "../src/components/Modal";
import Header from "../src/components/layout/Header";
import SignupPortal from "../src/components/Portal/Signup";
import Main from "../src/components/Main";

const Signup = () => {
  return (
    <Header>
      <Main>
        <Portal selector="#modal">
          <Modal Route>
            <SignupPortal />
          </Modal>
        </Portal>
      </Main>
    </Header>
  );
};
export default Signup;
