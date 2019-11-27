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
    `
    return (
  <Layout>
     <>
    <div className='hero-head'/>
    <Content>
          <p>Tutaj zamieściłem teksty mojego autorstwa. Pierwszy z nich zatytułowany "Buława marszałkowska" jest zestawem mini - opowiadań z okresu II Wojny Światowej i tuż po wojnie, opartych na opowieściach rodzinnych, jednak z elementami fikcji literackiej. Drugi tekst "Szkice historyczno-polityczne" jest zestawem krótkich artykułów na tematy związane z historią najnowszą i polityką, które pisywałem dla pewnego portalu internetowego. <br/>
          Teksty te opracowałem w postaci e-booków w formacie e-pub. W celu ich ściągnięcia na dysk, wystarczy kliknąć w odpowiednią planszę. Żeby czytać e-booki w formacie e-pub, trzeba mieć odpowiednie (darmowe) oprogramowanie, które jest dostępne zarówno dla urządzeń stacjonarnych (np. Windows), jak też mobilnych (np. dla systemu Android w w Google Play)<br/>
          Teksty te są również dostępne w formacie dla urządzenia Kindle (mobi, lub azw3): </p>
            
    </Content>
    </>
    <BookShelf />
  </Layout>
    )
}

export default EBooks
