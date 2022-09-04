import React from "react";
import style from "./Footer.module.css";
import dog from "../Assets/beautiful-pet.png";
import dog2 from "../Assets/lovely-pet.png";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={style.footer}>
      <img className={style.img} src={dog} />
      <div className={style.footer_logo}>
        <Logo width={"120px"} heigth={"85px"} />
        <div style={{display: 'flex', width: '500px ', justifyContent: 'space-around'}}> 
          <ul className={style.ul}>
            <Link to="/">Contato</Link>
            <Link to="/">Teste</Link>
            <Link to="/">AAAAAA</Link>
            <Link to="/">AAAAAA</Link>
            <Link to="/">AAAAAA</Link>
            <Link to="/">AAAAAA</Link>
          </ul>
          <ul className={style.ul}>
            <Link to="/">Contato</Link>
            <Link to="/">Teste</Link>
            <Link to="/">AAAAAA</Link>
            <Link to="/">AAAAAA</Link>
            <Link to="/">AAAAAA</Link>
            <Link to="/">AAAAAA</Link>
          </ul>
        </div>
      </div>
      <img className={style.img} src={dog2} />
    </div>
  );
};

export default Footer;
