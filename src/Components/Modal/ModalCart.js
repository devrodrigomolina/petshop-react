import React, { useContext, useEffect, useState } from "react";
import style from "./ModalCart.module.css";
import ButtonsModal from "./ButtonsModal/ButtonsModal";
import Button from "../Button/Button";
import { QtdContext } from "../../context/qtdContext";
import { BiTrash } from 'react-icons/bi'
const ModalCart = ({ modalCart }) => {
  const produtosCart = JSON.parse(localStorage.getItem("pet"));
  const { quantidadeModalBtn ,produtosSelecionados, setProdutosSelecionados } = useContext(QtdContext);

  const [precoTotal, setPrecoTotal] = useState(0);
  const precoFinal = produtosSelecionados.map(({price, quantidade}) => Number(price.replace("R$ ", "").replace(",", ".")) * quantidade)

  const removeItem = (itemId) => {
    const prodRemove = produtosSelecionados.filter(produtoid => produtoid.id !== itemId)
    setProdutosSelecionados(prodRemove)
  }

  useEffect(() => {
    if(produtosCart.length) {
      setPrecoTotal(precoFinal.reduce((a, b) => a + b, 0))
    }
  }, [produtosCart.length, precoFinal, quantidadeModalBtn]);

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
                  <ButtonsModal cartProdutoId={produtos.id} />
                </div>
                <div className={style.iconRemove}>
                  <BiTrash onClick={() => removeItem(produtos.id)} />
                </div>
              </div>
            ))}
          </div>

          <div className={style.total_container}>
            <div className={style.total}>
              <p className={style.produto_preco}>Total:</p>
              <p>{precoTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
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
