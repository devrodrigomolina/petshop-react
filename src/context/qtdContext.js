import { createContext, useEffect, useState } from "react";

export const QtdContext = createContext();

const QtdProvider = (props) => {
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);
 
  useEffect(() => {
    localStorage.setItem("pet", JSON.stringify(produtosSelecionados));
  }, [produtosSelecionados]);

  return (
    <QtdContext.Provider value={{ produtosSelecionados, setProdutosSelecionados}}>
      {props.children}
    </QtdContext.Provider>
  );
};

export default QtdProvider;
