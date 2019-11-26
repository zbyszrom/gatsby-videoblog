import React from 'react'
import LayoutGen from './layout_gen'
import Footer from './footer.js'

const Layout = ({children}) => {

    return (
        <LayoutGen>
            {children} 
            <Footer />
        </LayoutGen>

        
    ) 
}

export default Layout