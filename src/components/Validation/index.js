import * as Yup from "yup";
const nameRegex = /^[a-zA-Z]+$/;
export const validate = Yup.object().shape({
    email: Yup.string()
      .email("Email isn't valid")
      .required("Required"),

    pass: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Required") ,

    name: Yup.string()
    .required("Required")
    .matches(nameRegex,'Name is Invalid')
  });