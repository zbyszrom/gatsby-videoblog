import React from 'react'
import {Link} from 'gatsby'
import nS from './nav.module.scss'
//import styled from "styled-components"
const Nav = () => {

  
    return(

    <nav>
      <div className ={nS.items}>
           
        <Link className = {nS.navLink} to='/'>Początek</Link>
        <Link className = {nS.navLink} to='/contact'>Kontakt</Link>
        <Link className = {nS.navLink} to='/video'>Filmy</Link>
        <Link className = {nS.navLink} to='/texts'>Teksty</Link>
        <Link className = {nS.navLink} to='/ebooks'>ebooki</Link>
    
      </div> 
        
    </nav>
)}

export default Nav