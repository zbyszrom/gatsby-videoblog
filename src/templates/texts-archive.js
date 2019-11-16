import React from 'react'
import { Link, graphql, navigate } from 'gatsby'
import Layout from '../components/layout'


const TextArchive = (props) => {

    const textContent = props.data.allContentfulLyric

    return (
        <Layout>
            <div></div>
            <h2>Teksty i tłumaczenia</h2>
            <div>
            {textContent.edges.map(edge => (
                <div key={edge.node.id}  onClick={() => navigate(`/text/${edge.node.slug}`)}>
                <br/>
            <p >{edge.node.artists}</p>
            <p >{edge.node.title}</p>
            <div  dangerouslySetInnerHTML={
            {__html: `${edge.node.text.childMarkdownRemark.excerpt}`} }/>
            <p >{edge.node.polskiTytu}</p>
            <div  dangerouslySetInnerHTML={
            {__html: `${edge.node.polskiTekst.childMarkdownRemark.excerpt}`} }/>
            </div>
            
            ))}

            </div>
        </Layout>

    )

}
export default TextArchive

export const pageQuery = graphql`
query LyricsArchiveQuery {
    allContentfulLyric(
        sort: { fields: [createdAt], order: DESC }) 
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