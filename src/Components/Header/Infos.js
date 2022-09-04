import React from "react";
import style from "./Infos.module.css";
const Infos = () => {
  return (
    <div>
      <h1>
        Tudo o que seu pet precisa a <span className={style.span}>WOOOF</span>{" "}
        tem!
      </h1>
      <h2>
        Seja para comprar um petisco ou uma roupinha estilosa... basta você
        selecionar o produto, escolher como deseja pagar e pronto!
      </h2>
      <button className={style.btn}>SAIBA MAIS</button>
    </div>
  );
};

export default Infos;
