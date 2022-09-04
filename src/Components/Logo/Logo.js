import React from 'react'
import logo from '../Assets/logo.png'

const Logo = ({ width, heigth }) => {
  return <img src={logo} style={{width: width, height: heigth}}/>
}

export default Logo