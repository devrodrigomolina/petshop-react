import React from "react";
import style from "./Modal.module.css";

const Modal = ({ produtos, id, imageId }) => {
  return (
    <div className={style.modal_container}>
      <div className={style.modal}>
        {id === +imageId && (
          <img src={produtos[+imageId].src} />
        )}
      </div>
    </div>
  );
};

export default Modal;
