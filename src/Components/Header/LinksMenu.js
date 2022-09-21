import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";

import style from "./LinksMenu.module.css";


const HeaderLinks = () => {
  return (
    <div className={style.menu_container}> 
      <ul className={style.ul}>
        <NavLink className='link_item' exact="true" to="/">
          Home
        </NavLink>
        <NavLink className={style.links} to="sobre">Sobre</NavLink>
        <NavLink className='link_item' to="loja">Loja</NavLink>
        <NavLink className='link_item' to="contato">Contato</NavLink>
        </ul>
        <div className={style.cart}>
          <Cart />
        </div>
    </div>
  );
};

export default HeaderLinks;
