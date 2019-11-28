import React from 'react'
import {Link} from 'gatsby'
import navS from './nav_categories.module.scss'



const NavCategoriesLyrics = () => {


    return(
    <div className = {navS.nav}>
            <Link to='/texts' className={navS.link}>Wszystkie</Link>
            <Link to='/lcategory/en' className={navS.link}>Angielskie</Link>
            <Link to='/lcategory/pl' className={navS.link}>Polskie</Link>
            <Link to='/lcategory/music' className={navS.link}>Tylko Muzyka</Link>
            
    </div> 
)}

export default NavCategoriesLyrics