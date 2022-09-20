import React, { useContext, useEffect, useState } from "react";
import { IoMdCart } from "react-icons/io";
import { QtdContext } from "../../context/qtdContext";
import ModalCart from "../Modal/ModalCart";
import style from "./Cart.module.css";

const Cart = () => {
  const [itenscart, setItenscart] = useState(0);
  const [modalCart, setModalCart] = useState(false);
  const { produtosSelecionados } = useContext(QtdContext);

  useEffect(() => {
    setItenscart(produtosSelecionados.length)
  }, [produtosSelecionados])

  const openModalCart = () => {
    setModalCart(!modalCart);
  };

  return (
    <div className={style.cart_container}>
      {itenscart > 0 && <span className={style.cart_total}>{itenscart}</span>}
      <IoMdCart onClick={openModalCart} className={style.cart} />
      <ModalCart modalCart={modalCart} />
    </div>
  );
};

export default Cart;
