import React from "react";
import s from "./input.module.css";

const Input = () => {
  return (
    <input
      placeholder="Введите текст"
      type="text"
      id="input"
      className={s.input}
    />
  );
};

export default Input;
