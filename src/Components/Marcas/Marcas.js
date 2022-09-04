import React from 'react'
import style from './Marcas.module.css'
import { marcas } from './JsonMarcas'

const Marcas = () => {
  return (
  <div className={style.marcas_container}>
    {marcas.map(({src, text}) => <img src={src} />)}
  </div>
  )
}

export default Marcas