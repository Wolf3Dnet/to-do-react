import React from "react";
import s from "./button.module.css";

const Button = () => {
  return (
    <button className={s.button} id="btn-add">
      Add
    </button>
  );
};

export default Button;
