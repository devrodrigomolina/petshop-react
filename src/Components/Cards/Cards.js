import React from "react";
import { images } from "./JsonImages";
import style from "./Cards.module.css";

const Cards = () => {
  return (
    <div className={style.cards}>
      {images.map(({src, text}) => (
        <div key={src} className={style.card}>
          <img className={style.imgcard} src={src} />
          <p className={style.text_card}>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
