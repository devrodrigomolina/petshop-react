import React, { useContext, useEffect, useState } from "react";
import style from "./ModalCart.module.css";
import ButtonsModal from "./ButtonsModal/ButtonsModal";
import Button from "../Button/Button";

const ModalCart = ({ modalCart }) => {
  const produtosCart = JSON.parse(localStorage.getItem("pet"));
  const [qtd, setQtd] = useState('')

  const totalPreco = produtosCart.map(({ price }) =>
    Number(price.replace("R$ ", "").replace(",", "."))
  );

  useEffect(() => {
    produtosCart.forEach(element => {
      setQtd(element.quantidade)
    });

  }, [produtosCart])

  const totalPrecoFinal = totalPreco.length && totalPreco.reduce((acc, att) => acc + att);

  return (
    <>
      {modalCart && (
        <div className={style.container_modalcart}>
          <div className={style.container_produtos}>
            {produtosCart.map((produtos) => (
              <div key={produtos.name} className={style.container_modalinfos}>
                <div className={style.container_image}>
                  <img src={produtos.src} />
                </div>
                <div className={style.container_infos}>
                  <p className={style.produto_nome}>{produtos.name}</p>
                  <p className={style.produto_desc}>{produtos.text}</p>
                  <p className={style.produto_preco}>{produtos.price}</p>
                </div>
                <div className={style.ButtonsModal}>
                  <ButtonsModal
                    quantidadeP={produtos.quantidade}
                    produto={produtos}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={style.total_container}>
            <div className={style.total}>
              <p className={style.produto_preco}>Total:</p>
              <p>R$: {totalPrecoFinal * qtd }</p>
            </div>
            <Button
              text="FINALIZAR COMPRA"
              background="var(--primary-color)"
              color="white"
              width="100%"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCart;
