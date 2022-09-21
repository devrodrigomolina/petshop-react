import React, { useEffect, useState } from "react";
import { produtos } from "./JsonProdutos";
import style from "./Produtos.module.css";
import Modal from "../Modal/Modal";

const Produtos = ({ amount }) => {
  const [modal, setModal] = useState(false);
  const [imageId, setImageId] = useState(null);
 
  const openModal = ({ target }) => {
    setImageId(target.id);
    setModal(true);
  };

  return (
    <>
      {produtos.map(
        ({ src, text, price, id }, index) =>
          index <= amount && (
            <div key={id} onClick={openModal} className={style.cards_produtos}>
              <img id={id} className={style.img} src={src} />
              <p>{text}</p>
              <p className={style.price}>{price}</p>
            </div>
          )
      )}
      {modal && (
        <Modal
          produtos={produtos}
          imageId={imageId}
          setModal={setModal}
          modal={modal}
        />
      )}
    </>
  );
};

export default Produtos;
