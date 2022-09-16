import React, { useContext, useEffect, useState } from "react";
import { QtdContext } from "../../../context/qtdContext";
import style from "./ButtonsModal.module.css";
import { produtos } from "../../Produtos/JsonProdutos";

const ButtonsModal = ({ id, cartProdutoId }) => {
  const { quantidade, setQuantidade } = useContext(QtdContext);
  const produtoQtd = produtos.find((produto) => produto.id === id);
  const produtoCartQtd = produtos.find((produto) => produto.id === cartProdutoId);

  const getQuantidade = () => {
    if (produtoCartQtd) {
      return produtoCartQtd.quantidade;
    }
    return quantidade;
  };

  const addItemCart = () => {
    if(produtoCartQtd) {
      setQuantidade((produtoCartQtd.quantidade = produtoCartQtd.quantidade + 1));
    }
    setQuantidade((produtoQtd.quantidade = produtoQtd.quantidade + 1));
  };
  const removeItemCart = () =>
    produtoQtd.quantidade != 1 &&
    setQuantidade((produtoQtd.quantidade = produtoQtd.quantidade - 1));

  return (
    <div className={style.select_qtd}>
      <button onClick={addItemCart}>+</button>
      <p className={style.qtd}>{getQuantidade()} </p>
      <button onClick={removeItemCart}>-</button>
    </div>
  );
};

export default ButtonsModal;
