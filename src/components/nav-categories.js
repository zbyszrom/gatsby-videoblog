import React from 'react'
import {Link} from 'gatsby'
import navcatS from "./nav-categories.module.scss"
const NavCategories = () => (
    <div className={navcatS.nav}>
            <Link to='/video' className={navcatS.link}>Wszystkie</Link>
            <Link to='/category/am' className={navcatS.link}>Ameryka</Link>
            <Link to='/category/eu' className={navcatS.link}>Europa</Link>
            <Link to='/category/pl' className={navcatS.link}>Polska</Link>
            <Link to='/category/rep' className={navcatS.link}>Reportaze</Link>
            <Link to='/category/misc' className={navcatS.link}>Inne</Link>
        </div> 
)

export default NavCategories