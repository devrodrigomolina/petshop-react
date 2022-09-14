import React, { useContext, useEffect, useState } from "react";
import style from "./Modal.module.css";
import Title from "../Title";
import Button from "../Button/Button";
import ButtonsModal from "./ButtonsModal/ButtonsModal";
import { QtdContext } from "../../context/qtdContext";


const Modal = ({ produtos, imageId, setModal }) => {
  const produto = produtos.find(produto => produto.id === +imageId)

  const { id, src, price, text, desc } = produto

  const {produtosSelecionados, setProdutosSelecionados} = useContext(QtdContext)

  const closeModal = ({ target }) => {
    target.id === "container" && setModal(false);
    target.innerText === "CANCELAR" && setModal(false);
  };

  const setItensCart = () => {
    setProdutosSelecionados([...produtosSelecionados, produto])
  };

  return (
    <div onClick={closeModal} id="container" className={style.modal_container}>
      <div className={style.modal}>
        <div>
          <img src={src} />
        </div>
        <div className={style.container_infos}>
          <Title text={text} />
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
            <ButtonsModal id={id}/>
          </div>

          <div className={style.btns}>
            <Button text="Adicionar ao carrinho" onClick={setItensCart} />
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
