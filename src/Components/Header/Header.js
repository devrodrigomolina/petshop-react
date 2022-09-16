import React from 'react'
import LinksMenu from './LinksMenu'
import style from './Header.module.css'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import Infos from './Infos'


const Header = () => {
  return (
    <div className={style.container}>
      <nav className={style.nav_container}>
        <Link to='/'>
          <Logo width={'100px'} />
        </Link>
        <LinksMenu />
      </nav>
      <div className={style.infos}>
        <Infos />
      </div>
    </div>
  )
}

export default Header