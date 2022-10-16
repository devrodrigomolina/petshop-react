import React from 'react'
import Button from '../../Button/Button'
import style from './Contato.module.css'

const Contato = () => {
  return (
    <>
      <h1 style={{textAlign: 'center', marginTop: '100px'}}>Entre em contato conosco</h1>
    <div className={style.container_form}>
      <form action='post' className={style.form}>
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name" />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />
  
        <textarea
          rows="8"
          id="experiencia"
          name="experiencia"
        ></textarea>
        <Button text='enviar'/>
      </form>
    </div>
    </>
  )
}

export default Contato