import React from 'react'
import {Link, graphql, navigate } from 'gatsby'
import Layout from '../../components/layout'
import NavCategories from '../../components/nav-categories'

const Poland = (props) => {
  const videoContent = props.data.allContentfulVideo
  const { currentPage, numPages } = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/category/pl' : `/category/pl/${currentPage - 1}`
    const nextPage = `/category/pl/${currentPage + 1}`
    return(
<Layout>
  <NavCategories />
  <div className ='hero-arch' />
        
        
        <div className='feed'>
            {videoContent.edges.map(edge => (
                <div key={edge.node.id} className="card">
                <br/>
                <h3 >{edge.node.title}</h3>
                <img src={edge.node.featuredImage.fluid.src} alt=""
            onClick={() => navigate(`/video/${edge.node.slug}`)}/>
            
            <p >{edge.node.lyric.artists}</p>
            <p  onClick={() => navigate(`/text/${edge.node.lyric.slug}`)}>{edge.node.lyric.title}</p>
                
            </div>
            
            ))}
        </div>
        <div >
            <div >
                {!isFirst && (
                    <Link to={prevPage} rel='prev'>
                        <div ></div>
                    </Link>
                )}
            </div>
            <div >
                {!isLast && (
                    <Link to={nextPage} rel='next'>
                        <div ></div>
                    </Link>
                )}
            </div>
        </div>  
</Layout>
    )
}
export default Poland

export const pageQuery = graphql` 
 query PlQuery  {
   allContentfulVideo(
       sort: { fields: [videoCreatedAt], order: DESC }
       filter: { category: {slug: {eq: "pl"}} 
   }
       
     ) {
     edges {
       node {
         id
         slug
         title         
         category {
           category  
         }
         lyric {
          artists
          title
          slug
        }            
         featuredImage {
           fluid {
             src             
           }
         }
       }
     }
   }
}
`