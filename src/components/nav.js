import React from 'react'
import {Link} from 'gatsby'
import navS from './nav.module.scss'

const Nav = () => (
    <nav>
      <div className={navS.items}>
    
        
      <Link className = {navS.item} to='/'>Początek</Link>
        <Link className = {navS.item} to='/contact'>Kontakt</Link>
        <Link className = {navS.item} to='/video'>Filmy</Link>
        <Link className = {navS.item} to='/texts'>Teksty</Link>
        <Link className = {navS.item} to='/ebooks'>ebooki</Link>



    
</div> 
    
    
    </nav>
)

export default Nav