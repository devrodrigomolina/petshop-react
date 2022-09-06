import React, { useState } from "react";
import { IoMdCart } from "react-icons/io";
import style from "./Cart.module.css";
const Cart = () => {
  const [itenscart, setItenscart] = useState(3);

  const teste = () => {
    alert("VOCE FOI TESTADO");
  };
  return (
    <div className={style.cart_container}>
      {itenscart > 0 && <span className={style.cart_total}>{itenscart}</span>}
      <IoMdCart onClick={teste} className={style.cart} />
    </div>
  );
};

export default Cart;
