import React, { useState } from "react";
import style from "./MenuMobile.module.css";
import LinksMenu from '../LinksMenu'

const MenuMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <div className={style.container}>
        <button /* id={menuOpen ? 'is_open' : ''} */ className={style.open_main_nav}>
          <span className={style.burger} onClick={handleClick}></span>
          <span className={style.burger_text}>{menuOpen}</span>
        </button>
        {/* <LinksMenu /> */}
      </div>
    </>
  );
};

export default MenuMobile;
/* https://codepen.io/GeoffreyCrofte/pen/ajKVRq */