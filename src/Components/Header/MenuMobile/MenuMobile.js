import React, { useState } from "react";
import style from "./MenuMobile.module.css";
import LinksMenu from "../LinksMenu";
import Logo from "../../Logo/Logo";
import Cart from "../../Cart/Cart";

const MenuMobile = () => {
  const [checkbox, setCheckbox] = useState(false);

  const closeModal = ({target}) => {
    target.tagName === 'A' && setCheckbox(false)
  }

  return (
    <div className={style.main_container}>
      <input
        type="checkbox"
        checked={checkbox}
        onChange={({ target }) => setCheckbox(target.checked)}
        id={style.active}
      />

      <div className={style.container_menu}>
        <label for={style.active} className={style.menu_btn}>
          <div className={style.menu}>
            <div id={style.bar} className={checkbox && style.animate}></div>
          </div>
        </label>
        <Cart />
      </div>

      <div onClick={closeModal} className={style.wrapper}>
        <LinksMenu  />
      </div>
    </div>
  );
};

export default MenuMobile;
