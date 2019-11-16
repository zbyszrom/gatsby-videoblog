import React from 'react';
import { graphql, navigate } from 'gatsby';
import Layout from '../components/layout';



const LyricTemplate = (props) => {
    const textContent = props.data.contentfulLyric

    return (
        <Layout>
        
        <div > 
         
         <h1>{textContent.artists}</h1> 
         <div >
           <div >
         <h3>--{textContent.title}--</h3> 
         <div dangerouslySetInnerHTML={
            {__html: `${textContent.text.childMarkdownRemark.html}`} }/>
            </div>
            <div >
            <h3>-- {textContent.polskiTytu} --</h3>
            <div dangerouslySetInnerHTML={
            {__html: `${textContent.polskiTekst.childMarkdownRemark.html}`} }/>
            </div> 
            </div> 
             
         </div>
        
        </Layout>
    )
}

export default LyricTemplate;

export const query = graphql`
 query LyricTemplate($id: String!) {
   contentfulLyric(id: {eq: $id}) {
    artists
    title
    text {
      childMarkdownRemark {
        html
      }
    }
    polskiTytu
    polskiTekst {
      childMarkdownRemark {
        html
      }
    }

}
}
`


