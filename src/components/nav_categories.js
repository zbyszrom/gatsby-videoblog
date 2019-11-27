import React from 'react'
import {Link} from 'gatsby'
import navS from './nav_categories.module.scss'



const NavCategories = () => {


    return(
    <div className = {navS.nav}>
            <Link to='/video' className={navS.link}>Wszystkie</Link>
            <Link to='/category/am' className={navS.link}>Ameryka</Link>
            <Link to='/category/eu' className={navS.link}>Europa</Link>
            <Link to='/category/pl' className={navS.link}>Polska</Link>
            <Link to='/category/rep' className={navS.link}>Reportaze</Link>
            <Link to='/category/misc' className={navS.link}>Inne</Link>
    </div> 
)}

export default NavCategories