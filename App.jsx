import React, { useState } from "react";

function App() {
  const [value, handleVal] = useState("");
  const [iteam, setitem] = useState([]);

  function handlechange(event) {
    const val = event.target.value;
    handleVal(val);
  }
  function handleClick() {
    setitem((prevval) => {
      return [...prevval, value];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={value} onChange={handlechange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {iteam.map((p) => (
            <li>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
