import React from 'react'
import styled from "styled-components"

const Introduction = () => {
    const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100px;
    max-width: 800px;
    margin-top: 40px;
    `
    return(
    <>
    <div className='hero-head'/>
    <h1 >O moich filmach</h1>
    <Content>
    
    <div >
            <p>Cześć, mam na imię Zbigniew. Moje hobby to fotografia, krótkie filmy, oraz tłumaczenie piosenek i poezji z angielskiego. </p>
            <p>Witam serdecznie wszystkich odwiedzających moją stronę.</p>
            
            <h3 >A oto kilka wybranych filmów:</h3>
    </div>       
    </Content>
    
    </>
)
    }
export default Introduction