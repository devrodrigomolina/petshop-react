import React, { useEffect, useState } from "react";
import { produtos } from "./JsonProdutos";
import style from "./Produtos.module.css";
import Modal from "../Modal/Modal";

const Produtos = ({ amount, columns, sizeContainer }) => {
  const [modal, setModal] = useState(false);
  const [imageId, setImageId] = useState(null);
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);

  useEffect(() => {
    localStorage.setItem("pet", JSON.stringify(produtosSelecionados));
  }, [produtosSelecionados]);

  const openModal = ({ target }) => {
    setImageId(target.id);
    setModal(true);
  };

  return (
    <div
      className={style.container_produtos}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        width: `${sizeContainer}px`,
      }}
    >
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
          setProdutosSelecionados={setProdutosSelecionados}
          produtosSelecionados={produtosSelecionados}
          imageId={imageId}
          setModal={setModal}
          modal={modal}
        />
      )}
    </div>
  );
};

export default Produtos;
