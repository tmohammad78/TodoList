import React from "react";
import classNames from "classnames";

const  RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  className,
  Image,
  ...props
}) => {
  return (
    <label className="custom-checkbox">
      <input
        name={name}
        id={id}
        type="radio"
        value={id} // could be something else for output?
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className={classNames("styled_checkbox")}
        {...props}
      />
      <div
        className="checkBack"
        style={{
          backgroundImage: Image
        }}
      >
        <span />
      </div>
    </label>
  );
};
export default RadioButton;
