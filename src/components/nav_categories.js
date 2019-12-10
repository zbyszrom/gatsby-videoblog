import React from 'react'
import {Link} from 'gatsby'
import navS from './nav_categories.module.scss'



const NavCategories = () => {


    return(
    <div className = {navS.nav}>
            <Link to='/video' className={navS.link} activeStyle={{ color: "#f06666" }}>Wszystkie</Link>
            <Link to='/category/am' className={navS.link} activeStyle={{ color: "#f06666" }}>Ameryka</Link>
            <Link to='/category/eu' className={navS.link} activeStyle={{ color: "#f06666" }}>Europa</Link>
            <Link to='/category/pl' className={navS.link} activeStyle={{ color: "#f06666" }}>Polska</Link>
            <Link to='/category/rep' className={navS.link} activeStyle={{ color: "#f06666" }}>Reportaże</Link>
            <Link to='/category/misc' className={navS.link} activeStyle={{ color: "#f06666" }}>Inne</Link>
    </div> 
)}

export default NavCategories