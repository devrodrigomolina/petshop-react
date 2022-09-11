import React from "react";
import style from "./Button.module.css";
const Button = ({ text, background, color, width, onClick }) => {
  return (
    <button
      style={{ background: `${background}`, color: `${color}`, width: `${width}` }}
      className={style.btn}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
