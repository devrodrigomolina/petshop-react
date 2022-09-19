import React from "react";
import style from './MenuMobile.module.css'
import LinksMenu from '../LinksMenu'
import { Link } from "react-router-dom";
const MenuMobile = () => {
  return (
    <div className={style.main_container}>
      <input type="checkbox" id={style.bgtoggle} />
      <div className={style.card}>
        <label for={style.bgtoggle} className={style.menu}></label>
        <div className={style.menu_container}>
          <div className={style.links_menu}>
            <LinksMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

/* https://codepen.io/HAbdellah/pen/YzNqKPJ */

export default MenuMobile;
