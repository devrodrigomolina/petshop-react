import React from 'react'
import Cards from '../Cards/Cards'
import Marcas from '../Marcas/Marcas'
import Title from '../Title'
import style from './Home.module.css'
import destaque from '../Assets/Produtos/3.png'
import Produtos from '../Produtos/Produtos'

const Home = () => {
  return (
    <div className={style.home}>
      <Title text='Categorias' />
      <p className={style.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five csum</p>
      <Cards />
  
      <Title text='As melhores marcas' />
      <div className={style.container_marcas}>
        <p className={style.p}>Sempre trazendo as melhores marcas para Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
        <Marcas />
      </div>

      <Title text='Destaques da semana' />
      <div className={style.container_destaques}>
        <div>
          <h1>Produtos em destaque</h1>
          <img style={{width: '400px'}} src={destaque}/>
          <p style={{width: '400px'}}>O alimento para gatos WHISKAS® é nutricionalmente completo e balanceado, com um ótimo equilíbrio de vitaminas e minerais para ajudá-lo a fornecer os melhores cuidados para o seu gato adulto. As necessidades nutricionais do seu gato mudam ao longo do tempo. É por isso que o alimento seco para gatos WHISKAS® 1+ anos é especialmente desenvolvido para gatos curiosos proporcionando a eles todos os nutrientes e energia necessários para explorar o mundo. WHISKAS®, ALIMENTE A CURIOSIDADE. Visite o veterinário regularmente. Mantenha sempre água fresca à disposição do seu gato. Modo de Conservação: Conservar o produto em sua embalagem original, devidamente fechada, em local seco e fresco.</p>
        </div>

        <div>
          <Produtos />  
        </div>

      </div>
    </div>
  )
}

export default Home