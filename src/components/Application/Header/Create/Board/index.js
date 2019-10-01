import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import RadioButton from "../../../../Button/RadioButton/RadioButton";
import RadioButtonGroup from "../../../../Button/RadioButton/RadioButtonGroup";
import { validateCreate } from "../../../../Validation";
import { Image1, Image2 } from "./InputImages";
import "./Board.scss";

import { addBoard } from "../../../../../services/board/action";
import Button from "../../../../Button";

const Board = () => {
  const dispatch = useDispatch();
  const submit = (values) => {
    let Image = "";
    if (values.radioGroup == "Image1") {
      Image = Image1;
    } else {
      Image = Image2;
    }
    dispatch(addBoard(values.boardValue, Image));
  };

  return (
    <div>
      <Formik
        initialValues={{
          boardValue: "",
          radioGroup: ""
        }}
        validationSchema={validateCreate}
      >
        {({ values, errors, touched, isValid }) => {
          return (
            <Form>
              <Field type="text" name="boardValue" />
              <ErrorMessage
                name="boardValue"
                render={(message) => (
                  <div className="errorInput">{message}</div>
                )}
              />
              <RadioButtonGroup
                id="radioGroup"
                value={values.radioGroup}
                error={errors.radioGroup}
                touched={touched.radioGroup}
              >
                <Field
                  component={RadioButton}
                  name="radioGroup"
                  id="Image1"
                  Image={Image1}
                />
                <Field
                  component={RadioButton}
                  name="radioGroup"
                  id="Image2"
                  Image={Image2}
                />
              </RadioButtonGroup>

              <button
                type="submit"
                disabled={!isValid}
                onClick={() => submit(values)}
              >
                submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default Board;
