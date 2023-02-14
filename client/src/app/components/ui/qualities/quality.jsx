import React from "react";
import PropTypes from "prop-types";

export default function Quality({ color, name, _id }) {
  const getBadgeClasses = (color) => {
    let classes = "badge m-2 bg-";
    classes += color;
    return classes;
  };

  return (
    <span key={_id} className={getBadgeClasses(color)}>
      {name}
    </span>
  );
}
Quality.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  _id: PropTypes.string
};
