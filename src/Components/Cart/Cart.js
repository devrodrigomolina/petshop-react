import React from 'react'
import { IoMdCart } from 'react-icons/io'
import style from './Cart.module.css'
const Cart = () => {
  const teste = () => {
    alert('VOCE FOI TESTADO')
  }
  return (
    <div className={style.cart_container}>
      <span className={style.cart_total}>a</span>
      <IoMdCart onClick={teste} className={style.cart} />
    </div>
  )
}

export default Cart