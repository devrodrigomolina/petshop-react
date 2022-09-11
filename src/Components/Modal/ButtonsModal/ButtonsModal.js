import React, { useState } from "react";
import style from "./ButtonsModal.module.css";

const ButtonsModal = () => {
  const [quantidade, setQuantidade] = useState(1);

  const addItemCart = () => setQuantidade(quantidade + 1);
  const removeItemCart = () => quantidade != 1 && setQuantidade(quantidade - 1);

  return (
    <div className={style.select_qtd}>
      <button onClick={addItemCart}>+</button>
      <p className={style.qtd}>{quantidade}</p>
      <button onClick={removeItemCart}>-</button>
    </div>
  );
};

export default ButtonsModal;
