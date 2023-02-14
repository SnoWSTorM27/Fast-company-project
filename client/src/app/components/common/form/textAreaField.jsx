import React from "react";
import PropTypes from "prop-types";

function TextAreaField({ label, name, value, onChange, error, rows }) {
  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "");
  };

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={getInputClasses()}
          rows={rows}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};
TextAreaField.defaultProps = {
  rows: "3"
};

TextAreaField.propTypes = {
  label: PropTypes.string,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
};

export default TextAreaField;
