import React from 'react'
import {Link} from 'gatsby'

const NavCategories = () => (
    <div>
            <Link to='/video' >Wszystkie</Link>
            <Link to='/category/am' >Ameryka</Link>
            <Link to='/category/eu' >Europa</Link>
            <Link to='/category/pl' >Polska</Link>
            <Link to='/category/rep' >Reportaze</Link>
            <Link to='/category/misc' >Inne</Link>
        </div> 
)

export default NavCategories