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
           pdf {
            file {
              contentType
              fileName
              url
            }
            contentful_id
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
           />
           <div>
          
           <div className= 'textblock'dangerouslySetInnerHTML={
           {__html: `${edge.node.excerpt.childMarkdownRemark.html}`} } />
           </div> 
            <p> 
             <a  className ='link' target="_blank"  href = {edge.node.pdf.file.url} > Aby przeczytać całość otwórz pdf</a>
             </p>
           </div>
           ))}
       </div>
    }
  />)

export default BookShelf