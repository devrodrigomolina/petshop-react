import React from "react";
import Button from "../Button/Button";

const Infos = () => {
  return (
    <div>
      <h1>
        Tudo o que seu pet precisa a <span style={{color: 'var(--primary-color)'}}>WOOOF</span>{" "}
        tem!
      </h1>
      <h2>
        Seja para comprar um petisco ou uma roupinha estilosa... basta você
        selecionar o produto, escolher como deseja pagar e pronto!
      </h2>
      <Button text='Saiba Mais' />
    </div>
  );
};

export default Infos;
