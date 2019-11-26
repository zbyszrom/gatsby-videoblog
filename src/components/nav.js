import React from 'react'
import {Link} from 'gatsby'
import styled from "styled-components"
const Nav = () => {

  const Items = styled.div`
  background-color: transparent;
    border: none;
    height: 40px;
    margin-top: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `
    return(

    <nav>
      <Items>
           
        <Link className = 'nav-link' to='/'>Początek</Link>
        <Link className = 'nav-link' to='/contact'>Kontakt</Link>
        <Link className = 'nav-link' to='/video'>Filmy</Link>
        <Link className = 'nav-link' to='/texts'>Teksty</Link>
        <Link className = 'nav-link' to='/ebooks'>ebooki</Link>
    
      </Items> 
        
    </nav>
)}

export default Nav