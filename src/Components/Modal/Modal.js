import React, { useState } from "react";
import style from "./Modal.module.css";
import Title from "../Title";
import Button from '../Button/Button'

const Modal = ({ produtos, imageId, setModal, modal }) => {

  const [quantidade, setQuantidade] = useState(1)

  const addItemCart = () => setQuantidade(quantidade + 1);
  const removeItemCart = () => quantidade != 0 && setQuantidade(quantidade - 1);

  const closeModal = ({ target }) => {
    target.id === "container" && setModal(false);
  };

  return (
    <div onClick={closeModal} id="container" className={style.modal_container}>
      <div className={style.modal}>
        <div>
          <img src={produtos[+imageId].src} />
        </div>
        <div className={style.container_infos}>

          <Title text={produtos[+imageId].text} />
          <div className={style.descricao}>
            {produtos[+imageId].desc.map((desc) => (
              <p>- {desc}</p>
            ))}
          </div>

          <div className={style.container_price}>

            <div className={style.price}>
              <span>Preço:</span>
              <p className={style.p}>{produtos[+imageId].price}</p>
            </div>
            <div className={style.select_qtd}>
                <button onClick={addItemCart}>+</button>
                <p className={style.qtd}>{quantidade}</p>
                <button onClick={removeItemCart}>-</button>
            </div>
          </div>


          <div className={style.btns}>
            <Button text='Adicionar ao carrinho' />
            <Button onClick={closeModal} text='Cancelar' background={'red'} color={'white'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
