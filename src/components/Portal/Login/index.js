import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withRouter } from "react-router-dom";

import { validate } from "../../Validation";
import { auth } from "../../../services/auth/action";
import { changeStyleValid } from "../../Validation/valid";
import Button from "../../Button";

import "./Login.scss";

const Login = (props) => {
  const error = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const submitForm = (values) => {
    dispatch(auth(null, values.email, values.pass, props.history));
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          pass: ""
        }}
        validationSchema={validate}
      >
        {({ errors, touched, values, handleSubmit, isValid }) => {
          const emailValidStyle = changeStyleValid(
            touched,
            values,
            errors,
            "email"
          );
          const passValidStyle = changeStyleValid(
            touched,
            values,
            errors,
            "pass"
          );

          return (
            <Form onSubmit={handleSubmit}>
              <div
                className={`inputValue 
                ${emailValidStyle.Invalid} 
                ${emailValidStyle.valid}  
                ${touched.email || values.email ? "focused" : null} `}
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
                className={`inputValue  
                ${passValidStyle.Invalid} 
                ${passValidStyle.valid}
                ${touched.pass || values.pass ? "focused" : null}  `}
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
              <div className="buttonBox">
                <Button
                  className={`btn btn-md btn-log`}
                  type="submit"
                  onClick={() => submitForm(values)}
                  // disabled={!isValid}
                >
                  Login in
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default withRouter(Login);
