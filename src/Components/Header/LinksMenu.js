import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";

import style from "./LinksMenu.module.css";
import MenuMobile from "./MenuMobile/MenuMobile";

const HeaderLinks = () => {
  return (
    <>
      <MenuMobile />
      <ul className={style.ul}>
        <NavLink exact="true" to="/">
          Home
        </NavLink>
        <NavLink to="sobre">Sobre</NavLink>
        <NavLink to="loja">Loja</NavLink>
        <NavLink to="contato">Contato</NavLink>
        <div>
          <Cart />
        </div>
      </ul>
    </>
  );
};

export default HeaderLinks;
