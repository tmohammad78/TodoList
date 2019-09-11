import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validate } from "../../Validation";
import { auth } from "../../../services/auth/action";

const Button = React.lazy(() => import("../../Button"));
import "./Login.scss";

const Login = () => {
  const error = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const operation = () => {
    dispatch(auth(email, pass));
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          pass: ""
        }}
        validationSchema={validate}
        onSubmit={(value, action) => {}}
      >
        {({ errors, touched, onSubmit, values }) => {
          let InvalidEmail = "";
          let InvalidPass = "";

          touched.email && errors.email ? (InvalidEmail = "is-invalid") : null;
          touched.pass && errors.pass ? (InvalidPass = "is-invalid") : null;
          return (
            <Form onSubmit={onSubmit}>
              <div
                className={`inputValue ${InvalidEmail} ${
                  touched.email && values.email ? "focused" : null
                }  `}
              >
                <label className="inputlabel">
                  <span>Email</span>
                </label>
                <Field
                  type="text"
                  name="email"
                  value={values.email}
                  className="input"
                />
              </div>
              <ErrorMessage
                name="email"
                render={(message) => (
                  <div className="errorInput">{message}</div>
                )}
              />
              <div
                className={`inputValue ${InvalidPass} ${
                  touched.pass && values.pass ? "focused" : null
                }  `}
              >
                <label className="inputlabel">
                  <span>Password</span>
                </label>
                <Field
                  type="password"
                  name="pass"
                  value={values.pass}
                  className="input"
                />
              </div>
              <ErrorMessage
                name="pass"
                render={(message) => (
                  <div className="errorInput">{message}</div>
                )}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;

// validate={(values) => {
//   let errors = {};
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (
//     !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//       values.email
//     )
//   ) {
//     errors.email = "Invalid email address";
//   }
//   return errors;
// }}

{
  /* <label className="inputlabel">
                <span>Email</span>
              </label> */
}
