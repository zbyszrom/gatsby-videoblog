import React from 'react'
import {graphql, navigate, Link } from 'gatsby'
import Layout from '../components/layout'


const TextArchive = (props) => {

    const textContent = props.data.allContentfulLyric
    const { currentPage, numPages } = props.pageContext
        const isFirst = currentPage === 1
        const isLast = currentPage === numPages
        const prevPage = currentPage - 1 === 1 ? '/texts' : `/texts/${currentPage - 1}`
        const nextPage = `/texts/${currentPage + 1}` 

    return (
        <Layout>
            <div></div>
            <h2>Teksty i tłumaczenia</h2>
            <div className='feed'>
            {textContent.edges.map(edge => (
                <div key={edge.node.id} className="card" onClick={() => navigate(`/text/${edge.node.slug}`)}>
                <br/>
            <p >{edge.node.artists}</p>
            <p >{edge.node.title}</p>
            <div className = 'excerpt'  dangerouslySetInnerHTML={
            {__html: `${edge.node.text.childMarkdownRemark.excerpt}`} }/>
            <p >{edge.node.polskiTytu}</p>
            <div className = 'excerpt' dangerouslySetInnerHTML={
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
export default TextArchive

export const pageQuery = graphql`
query LyricsArchiveQuery ($skip: Int!, $limit: Int!){
    allContentfulLyric(
        sort: { fields: [createdAt], order: DESC }
        skip: $skip
        limit: $limit
                      ) 
    {
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