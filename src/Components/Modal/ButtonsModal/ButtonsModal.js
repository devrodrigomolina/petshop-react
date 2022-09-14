import React, { useContext, useEffect, useState } from "react";
import { QtdContext } from "../../../context/qtdContext";
import style from "./ButtonsModal.module.css";
import { produtos } from '../../Produtos/JsonProdutos'

const ButtonsModal = ({ id }) => {
  const { quantidade, setQuantidade } = useContext(QtdContext);
  const produtoQtd = produtos.find((produto) => produto.id === id);

  const addItemCart = () => setQuantidade(produtoQtd.quantidade = produtoQtd.quantidade + 1);
  const removeItemCart = () => produtoQtd.quantidade!= 1 && setQuantidade(produtoQtd.quantidade = produtoQtd.quantidade - 1);;
  
  return (
    <div className={style.select_qtd}>
      <button onClick={addItemCart}>+</button>
      <p className={style.qtd}>{quantidade} </p>
      <button onClick={removeItemCart}>-</button>
    </div>
  );
};

export default ButtonsModal;
