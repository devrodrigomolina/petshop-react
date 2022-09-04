import React from 'react'
import style from './Title.module.css'

const Title = ({ text }) => {
  return <h1 className={style.title}>{text}</h1>
}

export default Title