import React from 'react'
import {Link} from 'gatsby'
import styled from "styled-components"
//import '../styles/global.scss'
//import navS from './nav.module.scss'

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
           
        <Link className = 'nav-link1' to='/'>Początek</Link>
        <Link className = 'nav-link1' to='/contact'>Kontakt</Link>
        <Link className = 'nav-link1' to='/video'>Filmy</Link>
        <Link className = 'nav-link1' to='/texts'>Teksty</Link>
        <Link className = 'nav-link1' to='/ebooks'>ebooki</Link>
    
      </Items> 
        
    </nav>
)}

export default Nav