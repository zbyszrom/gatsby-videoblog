import React from 'react'
import {Link} from 'gatsby'
import nS from './nav.module.scss'
//import styled from "styled-components"
const Nav = () => {

  
    return(

    <nav>
      <div className ={nS.items}>
           
        <Link className = {nS.navLink} to='/' activeStyle={{ color: "#f06666" }}>Początek</Link>
        <Link className = {nS.navLink} to='/contact' activeStyle={{ color: "#f06666" }}>Kontakt</Link>
        <Link className = {nS.navLink} to='/video' activeStyle={{ color: "#f06666" }}>Filmy</Link>
        <Link className = {nS.navLink} to='/texts' activeStyle={{ color: "#f06666" }}>Teksty</Link>
        <Link className = {nS.navLink} to='/ebooks' activeStyle={{ color: "#f06666" }}>ebooki</Link>
    
      </div> 
        
    </nav>
)}

export default Nav