export const changeStyleValid = (touched, values, errors, type) => {
  let Invalid = "";
  let valid = "";
  switch (type) {
    case "name":
      touched.name && errors.name ? (Invalid = "is-invalid") : null;
      values.name && !errors.name ? (valid = "is-valid") : null;
      return {
        Invalid,
        valid
      };

    case "email":
      touched.email && errors.email ? (Invalid = "is-invalid") : null;
      values.email && !errors.email ? (valid = "is-valid") : null;
      return {
        Invalid,
        valid
      };

    case "pass":
      touched.pass && errors.pass ? (Invalid = "is-invalid") : null;
      values.pass && !errors.pass ? (valid = "is-valid") : null;
      return {
        Invalid,
        valid
      };
  }
};
