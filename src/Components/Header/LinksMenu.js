import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdCart } from 'react-icons/io'
import style from "./LinksMenu.module.css";

const HeaderLinks = () => {
  return (
    <ul className={style.ul}>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="sobre">Sobre</NavLink>
      <NavLink to="loja">Loja</NavLink>
      <NavLink to="contato">Contato</NavLink>
      <NavLink to="cart">
        <IoMdCart style={{fontSize: '1.6rem', color: 'white'}} />
      </NavLink>
    </ul>
  );
};

export default HeaderLinks;
