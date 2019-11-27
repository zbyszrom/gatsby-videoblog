import React from 'react'
import { graphql, navigate, StaticQuery } from 'gatsby'
import bookS from './bookshelf.module.scss'
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
    
    render={data => 
      
     
       <div className = {bookS.feed}>
           {data.allContentfulBooks.edges.map(edge => (
               <div key={edge.node.id} >
                 <br/>
           <h2 >{edge.node.title}</h2>
           <h3 >{edge.node.subtitle}</h3>
        
           <img src={edge.node.coverPicture.fluid.src} alt=""
           onClick={() => navigate(``)} />
           <div>
           
           <div className= 'textblock'dangerouslySetInnerHTML={
           {__html: `${edge.node.excerpt.childMarkdownRemark.html}`} }/>
           </div> 

           </div>
           ))}
       </div>
    }
  />)

export default BookShelf