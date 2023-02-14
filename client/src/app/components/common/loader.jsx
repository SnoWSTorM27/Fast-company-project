import React from "react";

function Loader() {
  return (
    <div className="d-flex justify-content-center m-4">
      <strong className="text-info">Loading</strong>
      <div
        className="spinner-border text-info spinner-grow-sm"
        role="status"
      ></div>
    </div>
  );
}

export default Loader;
