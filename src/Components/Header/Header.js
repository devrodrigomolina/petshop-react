import React from 'react'
import LinksMenu from './LinksMenu'
import style from './Header.module.css'
import Logo from './Logo'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={style.container}>
      <nav className={style.nav_container}>
        <Link to='/'>
          <Logo />
        </Link>
        <LinksMenu />
      </nav>
      <div className={style.infos}>
        <h1>Tudo o que seu pet precisa a <span style={{color: '#f3d097'}}>WOOOF</span> tem!</h1>
        <h2>Seja para comprar um petisco ou uma roupinha estilosa... basta você selecionar o produto, escolher como deseja pagar e pronto!</h2>
        <button style={{width: '200px', height: '50px', background: '#f3d097', border: 'none', borderRadius: '7px'}}>SAIBA MAIS</button>
      </div>
     
    </div>
  )
}

export default Header