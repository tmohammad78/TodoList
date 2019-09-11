import * as Yup from "yup";
const nameRegex = /^[a-zA-Z]+$/;
export const validate = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Required"),

    pass: Yup.string()
      .min(6, "Too short")
      .required("Required") ,

    name: Yup.string()
    .required("Required")
    .matches(nameRegex,'Name is Invalid')
  });