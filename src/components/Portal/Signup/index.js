import React from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { validate } from "../../Validation";
import { changeStyleValid } from "../../Validation/valid";
import Button from "../../Button";
import { auth } from "../../../services/auth/action";

import "../Login/Login.scss";

const Signup = (props) => {
  const dispatch = useDispatch();

  const submitForm = (values) => {
    dispatch(auth(values.name, values.email, values.pass, props.history));
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
        onSubmit={submitForm}
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
          const nameValidStyle = changeStyleValid(
            touched,
            values,
            errors,
            "name"
          );
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
                className={`inputValue ${nameValidStyle.Invalid} ${
                  nameValidStyle.valid
                }  ${touched.name || values.name ? "focused" : null}  `}
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
                className={`inputValue ${emailValidStyle.Invalid} ${
                  emailValidStyle.valid
                }  ${touched.email || values.email ? "focused" : null}  `}
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
                className={`inputValue  ${passValidStyle.Invalid} ${
                  passValidStyle.valid
                }  ${touched.pass || values.pass ? "focused" : null}  `}
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
                  disabled={!isValid}
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

export default withRouter(Signup);
