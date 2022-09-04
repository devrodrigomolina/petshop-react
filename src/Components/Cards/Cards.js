import React from "react";
import { images } from "./JsonImages";
import style from "./Cards.module.css";

const Cards = () => {
  return (
    <div className={style.cards}>
      {images.map(({src, text}) => (
        <div className={style.card}>
          <img className={style.imgcard} src={src} />
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
