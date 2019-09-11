import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validate } from "../../Validation";
import Button from "../../Button";

import { auth } from "../../../services/auth/action";

import "../Login/Login.scss";

const Signup = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    return;
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          pass: ""
        }}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {({
          errors,
          touched,
          onSubmit,
          values,
          isSubmitting,
          handleSubmit,
          isValid
        }) => {
          let InvalidEmail = "";
          let InvalidPass = "";
          let InvalidName = "";

          touched.name && errors.name ? (InvalidName = "is-invalid") : null;
          touched.email && errors.email ? (InvalidEmail = "is-invalid") : null;
          touched.pass && errors.pass ? (InvalidPass = "is-invalid") : null;

          return (
            <Form onSubmit={handleSubmit}>
              <div
                className={`inputValue ${InvalidName} ${
                  touched.name && values.name ? "focused" : null
                }  `}
              >
                <label className="inputlabel">
                  <span>Name</span>
                </label>
                <Field
                  type="text"
                  name="name"
                  value={values.name}
                  className="input"
                />
              </div>
              <ErrorMessage
                name="name"
                render={(message) => (
                  <div className="errorInput">{message}</div>
                )}
              />
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
              <div className="buttonBox">
                <Button
                  className={`btn btn-md btn-primary`}
                  type="submit"
                  disabled={!isValid}
                  // onClick={Operation}
                >
                  Sign up
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Signup;
