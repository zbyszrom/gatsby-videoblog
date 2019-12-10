import React from 'react'
import {Link} from 'gatsby'
import navS from './nav_categories.module.scss'



const NavCategoriesLyrics = () => {


    return(
    <div className = {navS.nav}>
            <Link to='/texts' className={navS.link} activeStyle={{ color: "#f06666" }}>Wszystkie</Link>
            <Link to='/lcategory/en' className={navS.link} activeStyle={{ color: "#f06666" }}>Angielskie</Link>
            <Link to='/lcategory/pl' className={navS.link} activeStyle={{ color: "#f06666" }}>Polskie</Link>
            <Link to='/lcategory/music' className={navS.link} activeStyle={{ color: "#f06666" }}>Tylko Muzyka</Link>
            
    </div> 
)}

export default NavCategoriesLyrics