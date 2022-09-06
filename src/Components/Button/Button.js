import React from 'react'
import style from './Button.module.css'
const Button = ({ text, background, color }) => {
  return <button style={{background: `${background}`, color: `${color}`}} className={style.btn}>{text}</button>
}

export default Button