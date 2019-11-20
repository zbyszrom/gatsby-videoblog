import React from 'react'
import Nav from './nav'
import Footer from './footer'
import '../styles/global.scss'
import '../styles/pagination.scss'
import '../styles/cards.scss'

import layS from './layout.module.scss'

const Layout = ({children}) => {
    return (
        <div className={layS.container}>            
            <Nav />
                {children}            
            <Footer />
        </div>
    ) 
}

export default Layout