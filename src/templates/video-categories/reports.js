import React from 'react'
import {Link, graphql, navigate } from 'gatsby'
import Layout from '../../components/layout'
import NavCategories from '../../components/nav_categories'

const Reports = (props) => {
  const videoContent = props.data.allContentfulVideo
  const { currentPage, numPages } = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/category/rep' : `/category/rep/${currentPage - 1}`
    const nextPage = `/category/rep/${currentPage + 1}`
    return(
<Layout>
  <NavCategories />
  <div className ='hero-head' />
        
        
        <div className='feed'>
            {videoContent.edges.map(edge => (
                <div key={edge.node.id} className="card">
                <br/>
                <h3 className='title'>{edge.node.title}</h3>
                <img src={edge.node.featuredImage.fluid.src} alt=""
            onClick={() => navigate(`/video/${edge.node.slug}`)}/>
            
            <p className = 'link' onClick={() => navigate(`/text/${edge.node.lyric.slug}`)} >
                {edge.node.lyric.artists} - {edge.node.lyric.title}</p>
                
            </div>
            
            ))}
        </div>
        <div >
            <div >
                {!isFirst && (
                    <Link to={prevPage} rel='prev'>
                        <div ><p>back</p></div>
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
export default Reports

export const pageQuery = graphql` 
 query RepQuery  {
   allContentfulVideo(
       sort: { fields: [videoCreatedAt], order: DESC }
       filter: { category: {slug: {eq: "rep"}} 
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