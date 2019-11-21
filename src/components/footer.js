import React from 'react'
import styled from "styled-components"

const Footer = () => {
    
    const PageFooter = styled.footer`
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;`

    const Social = styled.div`
    background-color: #bbb;
    margin: 0 15px`

    return (
        <PageFooter >
             
            <p>Created by zbyszom, © 2019</p><br/>
           <Social> <a href="https://www.facebook.com/profile.php?id=100004800559124" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook fa-2x "></i></a>
        
        <a href="https://www.youtube.com/user/zbyszrom/videos?view_as=subscriber" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube fa-2x "></i></a> 
        </Social>  
        </PageFooter>
    )
}

export default Footer