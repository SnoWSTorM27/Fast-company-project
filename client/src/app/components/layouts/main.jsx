import React from "react";
import useMockData from "../../utils/mockData";

function Main() {
  const { error, initialize, progress, status } = useMockData();
  const handleClick = () => {
    initialize();
  };

  return (
    <div className="container mt-5">
      <h1>Main</h1>
      <h3>Инициализация данных в FireBase</h3>
      <ul>
        <li>Status: {status}</li>
        <li>Progress: {progress}%</li>
        {error && <li>error: {error}</li>}
      </ul>
      <button className="btn btn-primary" onClick={handleClick}>Иницилизировать</button>
    </div>
  );
}

export default Main;
