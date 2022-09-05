import React from 'react'
import Produtos from '../../Produtos/Produtos'
import Title from '../../Title'
import style from './Loja.module.css'

const Loja = () => {
  return (
    <div>
      <Title text="Nossos Produtos"/>
      <div className={style.produtos_container}>
        <Produtos amount={112} columns={5} sizeContainer={1200}/>
      </div>
    </div>
  )
}

export default Loja