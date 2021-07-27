import React from "react";
import "./App.css";
import Button from "./components/button/button";
import Elements from "./components/elements/elements";
import Input from "./components/input/input";

function App() {
  return (
    <div className="wrapper">
      <h1>To do list</h1>
      <Input />
      <Button />
      <Elements />
    </div>
  );
}

export default App;
