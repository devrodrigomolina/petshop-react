import React, { useEffect, useState } from "react";
import style from "./ButtonsModal.module.css";

const ButtonsModal = ({quantidadeP, produto}) => {
  const [quantidade, setQuantidade] = useState((quantidadeP));
  
  const addItemCart = () => setQuantidade(produto.quantidade = quantidade + 1);
  const removeItemCart = () => quantidade != 1 && setQuantidade(produto.quantidade = quantidade - 1);
  
  return (
    <div className={style.select_qtd}>
      <button onClick={addItemCart}>+</button>
      <p className={style.qtd}>{quantidade}</p>
      <button onClick={removeItemCart}>-</button>
    </div>
  );
};

export default ButtonsModal;
