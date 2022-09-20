import React from "react";
import { NavLink } from "react-router-dom";
import destaque from '../Assets/Produtos/3.png'
import style from './ProdutosDestaque.module.css'

const ProdutoDestaque = () => {
  return (
    <div>
      {" "}
      <h1>Produtos em destaque</h1>
      <img style={{ width: "380px" }} src={destaque} />
      <p className={style.p}>
        O alimento para gatos WHISKAS® é nutricionalmente completo e balanceado,
        com um ótimo equilíbrio de vitaminas e minerais para ajudá-lo a fornecer
        os melhores cuidados para o seu gato adulto. As necessidades
        nutricionais do seu gato mudam ao longo do tempo. É por isso que o
        alimento seco para gatos WHISKAS® 1+ anos é especialmente desenvolvido
        para gatos curiosos proporcionando a eles todos os nutrientes e energia
        necessários para explorar o mundo.
      </p>
      <NavLink to='/loja' className={style.link}>Veja mais produtos em destaque &gt;</NavLink>
    </div>
  );
};

export default ProdutoDestaque;
