import React from 'react'
import { produtos } from './JsonProdutos'
import style from './Produtos.module.css'

const Produtos = () => {
  return (
    <div className={style.container_produtos}>
      {produtos.map(({ src, text, price }) => 
        <div className={style.cards_produtos}>
          <img className={style.img} src={src}/>
          <p style={{fontWeight: 'bold'}}>{ text }</p>
          <p style={{color: 'var(--primary-color)', fontWeight: 'bold'}}>{ price }</p>
        </div>
      
      )}
    </div>
  )
}

export default Produtos