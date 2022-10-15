import React, { useContext, useEffect, useState } from "react";
import style from "./Modal.module.css";
import Title from "../Title";
import Button from "../Button/Button";
import ButtonsModal from "./ButtonsModal/ButtonsModal";
import { QtdContext } from "../../context/qtdContext";

const Modal = ({ produtos, imageId, setModal }) => {
  
  const { produtosSelecionados, setProdutosSelecionados } = useContext(QtdContext);
  const produtoFoiSelecionado = produtosSelecionados.find((produto) => produto.id === +imageId)
  const produtoDados = produtos.find((produto) => produto.id === +imageId);

  const produto = produtoFoiSelecionado ? produtoFoiSelecionado : produtoDados

  const { id, src, price, text, desc } = produto;
  
  const closeModal = ({ target }) => {
    target.id === "container" && setModal(false);
    target.innerText === "CANCELAR" && setModal(false);
  };
  
  const changeItensCart = (id) => {
    const produtosNaoSelecionados = produtosSelecionados.filter((item) => item.id !== +imageId);
    const novosProdutos = [...produtosNaoSelecionados, produto].sort((a, b) => a.id - b.id);
    setProdutosSelecionados(novosProdutos);
    setModal(false);
  }

  return (
    <div onClick={closeModal} id="container" className={style.modal_container}>
      <div className={style.modal}>
        <div>
          <img src={src} />
        </div>
        <div className={style.container_infos}>
          <div className={style.title}>
            <Title text={text} />
          </div>
          <div className={style.descricao}>
            {desc.map((desc) => (
              <p key={desc}>- {desc}</p>
            ))}
          </div>

          <div className={style.container_price}>
            <div className={style.price}>
              <span>Preço:</span>
              <p className={style.p}>{price}</p>
            </div>
            <ButtonsModal id={id} />
          </div>

          <div className={style.btns}>
            <Button text="Adicionar ao carrinho" onClick={changeItensCart} />
            <Button
              text="Cancelar"
              background={"red"}
              color={"white"}
              onClick={closeModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
