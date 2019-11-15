import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'


const Featured = () => (

    <StaticQuery
    query = { graphql` 
query FeaturedQuery {
    allContentfulVideo(
        limit: 9
        sort: {fields: videoCreatedAt, order: DESC}
        filter: {
            featured: {eq: true}
          }
        ) {
        edges {
          node {
            id
            slug
            title
            featuredImage {
              fluid {
                src
              }
            }
            category {
              slug
              category
            }
          }
        }
      }
    }`
} 
render={data => (
    <div >
        {data.allContentfulVideo.edges.map(edge => (
            <div key={edge.node.id} >
              <br/>
        <h3 >{edge.node.title}</h3>
        
        <img src={edge.node.featuredImage.fluid.src} alt=""
        onClick={() => navigate(`/video/${edge.node.slug}`)} />
        <p  onClick={() => navigate(`/category/${edge.node.category.slug}`)} >{edge.node.category.category}</p>
        

        </div>
        ))}
    </div>
 )}
/>
)
export default Featured 