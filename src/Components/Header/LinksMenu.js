import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";

import style from "./LinksMenu.module.css";


const HeaderLinks = () => {
  return (
    <> 
      <ul className={style.ul}>
        <NavLink className='link-item' exact="true" to="/">
          Home
        </NavLink>
        <NavLink className='link-item' to="sobre">Sobre</NavLink>
        <NavLink className='link-item' to="loja">Loja</NavLink>
        <NavLink className='link-item' to="contato">Contato</NavLink>
        <div className="cart">
          <Cart />
        </div>
      </ul>
    </>
  );
};

export default HeaderLinks;
