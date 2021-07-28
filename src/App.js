import React from "react";
import s from "./App.module.css";
import Elements from "./components/elements/elements";
import Form from "./components/input/form";

function App() {
  return (
    <div className={s.wrapper}>
      <h1>To do list</h1>
      <Form />
      <Elements />
    </div>
  );
}

export default App;
