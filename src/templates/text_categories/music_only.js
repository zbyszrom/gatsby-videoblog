import React from 'react'
import {Link, graphql, navigate } from 'gatsby'
import Layout from '../../components/layout'
import NavLyrics from '../../components/nav_lyrics'
import styled from "styled-components"

const Music = (props) => {
    const textContent = props.data.allContentfulLyric
    const { currentPage, numPages } = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/lcategory/music' : `/lcategory/music/${currentPage - 1}`
    const nextPage = `/lcategory/music${currentPage + 1}`

    const Excerpt = styled.div`
    font-family: Muli,sans-serif;
    font-size: 16px;
    line-height: 32px;
    font-weight: 300;
    color: #fff;
    font-style: italic; 
    `
      return(
  <Layout>
    <NavLyrics />
    <div className ='hero-head' />
    <h1>Muzyka</h1>
    <div className='feed'>
            {textContent.edges.map(edge => (
                <div key={edge.node.id} className="card" onClick={() => navigate(`/text/${edge.node.slug}`)}>
                <br/>
                <h3>{edge.node.artists}</h3>
            <h3 className='title'>{edge.node.title}</h3>
            <Excerpt  dangerouslySetInnerHTML={
            {__html: `${edge.node.text.childMarkdownRemark.excerpt}`} }/>
            <h3 className='title'>{edge.node.polskiTytu}</h3>
            <Excerpt dangerouslySetInnerHTML={
            {__html: `${edge.node.polskiTekst.childMarkdownRemark.excerpt}`} }/>
            </div>
            
            ))}
            </div>
            <div className = 'pagination'>
            <div className = 'item'>
                {!isFirst && (
                    <Link to={prevPage} rel='prev'>
                        <div className = 'back'></div>
                    </Link>
                )}
            </div>
            <div className = 'item'>
                {!isLast && (
                    <Link to={nextPage} rel='next'>
                        <div className = 'next'></div>
                    </Link>
                )}
            </div>
        </div>  
          
          
          
         
          
  </Layout>
      )
  }
  export default Music

  export const pageQuery = graphql` 
  query MusicQuery($skip: Int!, $limit: Int!)  {
    allContentfulLyric(
     filter: {categoryLyrics: {slug: {eq: "music"}}}
     sort: { fields: artists }
     skip: $skip
     limit: $limit
           ) {
       edges {
         node {
             id
             slug
             artists
             title
             text {
               childMarkdownRemark {
                 excerpt
               }
             }
             polskiTytu
             polskiTekst {
               childMarkdownRemark {
                 excerpt
               }
             }
             
           }
         }
       }
     }
     
 `