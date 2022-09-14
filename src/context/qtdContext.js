import { createContext, useEffect, useState } from "react";

export const QtdContext = createContext();

const QtdProvider = (props) => {
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);
  const [quantidade, setQuantidade] = useState(1)

  useEffect(() => {
    localStorage.setItem("pet", JSON.stringify(produtosSelecionados));
  }, [produtosSelecionados]);

  return (
    <QtdContext.Provider value={{ produtosSelecionados, setProdutosSelecionados, quantidade, setQuantidade }}>
      {props.children}
    </QtdContext.Provider>
  );
};

export default QtdProvider;
