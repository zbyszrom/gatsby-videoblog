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
            <Link to='/video' className='nav-link2'>Wszystkie</Link>
            <Link to='/category/am' className='nav-link2'>Ameryka</Link>
            <Link to='/category/eu' className='nav-link2'>Europa</Link>
            <Link to='/category/pl' className='nav-link2'>Polska</Link>
            <Link to='/category/rep' className='nav-link2'>Reportaze</Link>
            <Link to='/category/misc' className='nav-link2'>Inne</Link>
    </Items> 
)}

export default NavCategories