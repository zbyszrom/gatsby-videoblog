import React from 'react'
import LayoutGen from './layout_gen'
import FooterBare from './footer_bare.js'

const Layout = ({children}) => {

    return (
        <LayoutGen>
            {children} 
            <FooterBare />
        </LayoutGen>

        
    ) 
}

export default Layout