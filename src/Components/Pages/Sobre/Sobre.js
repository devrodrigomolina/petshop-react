import React from "react";
import Title from "../../Title";
import style from "./Sobre.module.css";

const Sobre = () => {
  return (
    <div className={style.sobre_container}>
      <Title text="Quem Somos?" />
      <p className={style.quem_somos}>
        Sabemos que cada laço é único. Fonte de alegria, evolução, bem-estar.
        Temos experiência e oferecemos espaços, produtos e serviços – e tudo
        mais que for preciso – para que a relação entre pets e suas famílias
        seja melhor a cada dia. Essa é nossa razão de ser.
        <p>
          Somos apaixonados por pets! Essa não é apenas uma expressão inserida
          em nossa missão como empresa, mas uma realidade vivenciada todos os
          dias em nossas atitudes, nas lojas e em todos os nossos pontos de
          contato.
        </p>
        <p>
          Trabalhamos para que você e seus pets tenham a melhor experiência em
          nossas lojas, seja através dos serviços de estética e veterinária ou
          pela variedade de produtos espalhados nos mais diversos mundos: cães,
          gatos, peixes, aves, roedores, répteis. Ah, mantemos nossas orelhas em
          pé para saber das novidades do mundo pet e levá-las até você.
        </p>
        <p>
          Conveniência é com a gente! Tudo é preparado e organizado para você
          encontrar facilmente o que procura, e o melhor: a qualquer hora e no
          lugar que preferir.
        </p>
        <p>
          Sabemos que cuidar de nossos bichinhos é um prazer: selecionar a
          melhor ração, buscar mimos novos, levá-los para um banho. O que
          importa é ver que eles estão bem.
        </p>
        <p>
          Muitas vezes, sabemos que seu tempo é curto, mas queremos que você
          aproveite cada segundo que passar conosco! Para isso, a gente trata
          todos os pets com muita dedicação e respeito e trabalha a todo
          instante para que nossas lojas, produtos e serviços estejam à altura
          de tanto amor e cuidado.
        </p>
        <p>
          Convidamos você a dar um passeio em nossas lojas, se divertir, trocar
          ideias, histórias, sentimentos, criar laços, sorrir com a gente. Isso
          é o que fazemos, e esse é o nosso jeito.
        </p>
        <p className={style.somos}>
          Somos a <span>WOOOF</span>, seu pet center de estimação!
        </p>
        <div className={style.missao}>
          <p>
            <span>Nossa Missão:</span> Criar valor na interação com os
            apaixonados por animais de estimação, potencializando o bem da
            relação entre o pet e sua família.
          </p>
          <p>
            <span>Nossa Visão:</span> Ser mundialmente reconhecido como melhor
            ecossistema do segmento pet até 2025.
          </p>
          <span>Nossos Valores:</span>
          <p>1. Somos apaixonados por pets;</p>{" "}
          <p>2. Respeitamos uns aos outros;</p>{" "}
          <p>3. Reconhecemos esforços, premiamos resultados;</p>
          <p>4. Encantamos nossos clientes;</p>
          <p>5. Temos prazer em servir.</p>
          <p>*Praticamos os 5 valores todos os dias.</p>
        </div>
      </p>
    </div>
  );
};

export default Sobre;
