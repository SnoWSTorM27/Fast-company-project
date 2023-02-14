import React from "react";
import PropTypes from "prop-types";

function CheckBoxField({ name, value, onChange, children, error }) {
  const handleChange = (target) => {
    onChange({ name, value: !value });
  };
  const getCheckBoxClasses = () => {
    return "form-check-input" + (error ? " is-invalid" : "");
  };

  return (
    <div className="form-check mb-4">
      <input
        className={getCheckBoxClasses()}
        type="checkbox"
        value=""
        id={name}
        onChange={handleChange}
        checked={value}
      />
      <label
        className="form-check-label"
        htmlFor={name}
      >
        {children}
      </label>
      {error &&
        <div
          className="invalid-feedback"
        >
          {error}
        </div>}
    </div>
  );
}
CheckBoxField.propTypes = {
  name: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default CheckBoxField;
