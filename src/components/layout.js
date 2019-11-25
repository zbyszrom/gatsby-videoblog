import React from 'react'
import LayoutGen from './layout_gen'
import Footer from './footer.js'
/*import '../styles/global.scss'
import '../styles/pagination.scss'
import '../styles/cards.scss'
import '../styles/backgrounds.scss'*/

const Layout = ({children}) => {

    return (
        <LayoutGen>
            {children} 
            <Footer />
        </LayoutGen>

        
    ) 
}

export default Layout