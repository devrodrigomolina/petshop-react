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
          <div className={style.logo}>
            <Logo width={'80px'} />
          </div>
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