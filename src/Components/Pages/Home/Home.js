import React from "react";
import Cards from "../../Cards/Cards";
import Marcas from "../../Marcas/Marcas";
import Title from "../../Title";
import style from "./Home.module.css";
import Produtos from "../../Produtos/Produtos";
import ProdutoDestaque from "../../Produtos/ProdutoDestaque";
import banner from "../../Assets/frete.png";
const Home = () => {
  return (
    <div className={style.home}>
      <Title text="Categorias" />
      <p className={style.p}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        csum
      </p>
      <Cards />

      <Title text="As melhores marcas" />
      <div className={style.container_marcas}>
        <p className={style.p}>
          Sempre trazendo as melhores marcas para Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took{" "}
        </p>
        <Marcas />
      </div>

      <Title text="Destaques da semana" />
      <div className={style.container_destaques}>
        <div>
          <ProdutoDestaque />
        </div>

        <div className={style.container_produtos}>
          <Produtos amount={5}/>
        </div>
      </div>
      <div style={{ margin: "20px auto", width: "75vw" }}>
        <img style={{ width: "100%", marginTop: "60px" }} src={banner} />
      </div>
    </div>
  );
};

export default Home;
