import React from 'react'
import styled from "styled-components"

const Footer_b = ({children}) => {
    
   

    const Social = styled.div`
    background-color: #bbb;
    margin: 0 15px`

    return (
        <footer >
            {children}
            
            <p>Created by zbyszrom, © 2019</p>
           <Social> <a href="https://www.facebook.com/profile.php?id=100004800559124" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook fa-2x "></i></a>
        
        <a href="https://www.youtube.com/user/zbyszrom/videos?view_as=subscriber" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube fa-2x "></i></a> 
        </Social>  
        </footer>
    )
}

export default Footer_b