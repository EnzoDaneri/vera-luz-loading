import React, { useState } from "react";
import "./App.css";

function App() {
  const [loading, setIsLoding] = useState(true);

  const spinner = () => {
    setIsLoding(!loading);
  };

  return (
    <>
      <h1>Vera Luz</h1>
      <div className="container">
        {loading && <div className="spinner"></div>}
      </div>

      <button onClick={spinner}>True - False</button>
    </>
  );
}

export default App;
