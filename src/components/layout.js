import React from 'react'
import Nav from './nav'
import Footer from './footer'
import '../styles/global.scss'
import '../styles/pagination.scss'
import '../styles/cards.scss'
import styled from "styled-components"

const Layout = ({children}) => {

    const Container = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;`

    return (
        <Container>            
            <Nav />
                {children}            
            <Footer />
        </Container>
    ) 
}

export default Layout