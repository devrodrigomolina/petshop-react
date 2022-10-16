import React, { useContext, useEffect, useState } from "react";
import { QtdContext } from "../../../context/qtdContext";
import style from "./ButtonsModal.module.css";
import { produtos } from "../../Produtos/JsonProdutos";

const ButtonsModal = ({ id, cartProdutoId }) => {
  const { setQuantidadeModalBtn } = useContext(QtdContext);
  const produtoQtd = produtos.find((produto) => produto.id === id);
  const produtoCartQtd = produtos.find(
    (produto) => produto.id === cartProdutoId
  );

  const getQuantidade = produtoCartQtd
    ? produtoCartQtd.quantidade
    : produtoQtd.quantidade;

  const addItemCart = () =>
    produtoCartQtd
      ? setQuantidadeModalBtn(
          (produtoCartQtd.quantidade = produtoCartQtd.quantidade + 1)
        )
      : setQuantidadeModalBtn(
          (produtoQtd.quantidade = produtoQtd.quantidade + 1)
        );

  const removeItemCart = () =>
    produtoCartQtd && produtoCartQtd.quantidade != 1 &&
    setQuantidadeModalBtn((produtoCartQtd.quantidade = produtoCartQtd.quantidade - 1));

  return (
    <div className={style.select_qtd}>
      <button onClick={addItemCart}>+</button>
      <p className={style.qtd}>{getQuantidade} </p>
      <button onClick={removeItemCart}>-</button>
    </div>
  );
};

export default ButtonsModal;
