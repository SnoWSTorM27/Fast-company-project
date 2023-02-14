import React from "react";
import PropTypes from "prop-types";

function SearchField({ label, name, value, onChange }) {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="inputGroup-sizing-default">{label}</span>
      <input
        onChange={onChange}
        name={name}
        value={value}
        type="text"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
  );
}
SearchField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default SearchField;
