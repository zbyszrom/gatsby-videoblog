import React from 'react'
import {Link} from 'gatsby'
import styled from "styled-components"



const NavCategories = () => {

const Items = styled.div`
    display: flex;
    min-height: 200px;
    padding: 60px 10% 0 10%;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 60px;`

    return(
    <Items>
            <Link to='/video' className='nav-link'>Wszystkie</Link>
            <Link to='/category/am' className='nav-link'>Ameryka</Link>
            <Link to='/category/eu' className='nav-link'>Europa</Link>
            <Link to='/category/pl' className='nav-link'>Polska</Link>
            <Link to='/category/rep' className='nav-link'>Reportaze</Link>
            <Link to='/category/misc' className='nav-link'>Inne</Link>
    </Items> 
)}

export default NavCategories