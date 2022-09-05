import React from "react";
import style from "./Footer.module.css";
import dog from "../Assets/beautiful-pet.png";
import dog2 from "../Assets/lovely-pet.png";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className={style.footer}>
      <img className={style.img} src={dog} />
      <div className={style.footer_logo}>
        <Logo width={"120px"} heigth={"85px"} />
        <div style={{display: 'flex', width: '1000px ', justifyContent: 'space-between'}}> 
          <ul className={style.ul}>
            <h3>INSTITUCIONAL</h3>
            <Link to="/">Quem Somos</Link>
            <Link to="/">Entregas e Prazos</Link>
            <Link to="/">Politica de Trocas e Devoluções</Link>
            <Link to="/">Politicas de Privacidade</Link>
            <Link to="/">Contato</Link>
  
          </ul>
          <ul className={style.ul}>
            <h3>CATEGORIAS</h3>
            <Link to="/">Gatos</Link>
            <Link to="/">Cachorros</Link>
            <Link to="/">Peixes</Link>
            <Link to="/">Passaros</Link>
            <Link to="/">Animais Diversos</Link>
          </ul>
          <ul className={style.ul}>
            <h3>RELACIONAMENTO</h3>
            <p>Precisa de ajuda com um pedido ou informações sobre produtos?</p>
            <Link to='/' style={{display: 'flex', alignItems: 'center', marginTop: '20px'}}>
              <FaWhatsapp className={style.icon} />
              <p>(44) 99999-9999</p>
            </Link>
          </ul>
        </div>
      </div>
      <img className={style.img} src={dog2} />
    </div>
  );
};

export default Footer;
