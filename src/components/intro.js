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
    <h2>oraz innych pracach</h2>
    <Content>
    
    
            <p>Cześć, mam na imię Zbigniew. Moje hobby to fotografia, krótkie filmy, oraz tłumaczenie piosenek i poezji z angielskiego. 
            Filmy pochodzą z lat 2011-2017. <br/>Jako podkład muzyczny wykorzystywałem często moje ulubione utwory, których teksty
            (niekiedy z własnymi tłumaczeniami) zamieściłem osobno. Oprócz tego napisałem i opracowałem  kilka ebooków,
            które udostępniłem  w formacie pdf.<br/>
            Witam serdecznie wszystkich odwiedzających moją stronę. </p>        
            
           
    </Content>
   </>
    
)
    }
export default Introduction