import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'

const BookShelf = () => (
    <StaticQuery
    query = {graphql` 
query BookdQuery {
   allContentfulBooks {
       edges {
         node {
           id
           slug
           title
           subtitle
           coverPicture {
             fluid {
               src
             }
           }
           excerpt {
             childMarkdownRemark {
               html
             }
           }
         }
       }
     }
}
`}
    render={data => (
       <div>
           {data.allContentfulBooks.edges.map(edge => (
               <div key={edge.node.id} >
                 <br/>
           <h3 >{edge.node.title}</h3>
           <h3 >{edge.node.subtitle}</h3>
           
           <img src={edge.node.coverPicture.fluid.src} alt=""
           onClick={() => navigate(`/${edge.node.slug}`)} />
           <div>
           
           <div dangerouslySetInnerHTML={
           {__html: `${edge.node.excerpt.childMarkdownRemark.html}`} }/>
           </div> 

           </div>
           ))}
       </div>
    )}
  />)

export default BookShelf