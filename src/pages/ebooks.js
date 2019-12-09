import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import BookShelf from '../components/bookshelf'


const EBooks = () => {
  const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100px;
    max-width: 800px;
    margin-top: 20px;
    align-items: center;
    `
    return (
  <Layout>
     <>
    <div className='hero-head'/>
    <Content>
          <p>Tutaj zamieściłem teksty mojego autorstwa. Pierwszy z nich zatytułowany "Buława marszałkowska" jest zestawem mini - opowiadań z czasów II Wojny Światowej i tuż powojennych. Są one oparte na opowieściach rodzinnych, jednak z elementami fikcji literackiej. Drugi tekst "Szkice historyczno-polityczne" jest zestawem krótkich artykułów na tematy związane z historią najnowszą i polityką, które kilka lat temu pisywałem dla pewnego portalu internetowego. <br/>
          Jest też album (w formacie pdf), który złożyłem ze zdjęć zrobionych podczas pielgrzymki do Ziemi Świętej w 2014 r. Dodałem również refleksje, które spisałem wkrótce po powrocie.</p>
            
    </Content>
    </>
    <BookShelf />
  </Layout>
    )
}

export default EBooks
