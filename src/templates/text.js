import React from 'react';
import { graphql} from 'gatsby';
import textS from './text.module.scss'
import Layout from '../components/layout';



const LyricTemplate = (props) => {
    const textContent = props.data.contentfulLyric
    const music = textContent.music

    if (!music) 
    {return (
      <Layout>
      
      <div className={textS.info}> 
       <h1>{textContent.artists}</h1> 
       <div className={textS.content}>
       <div className = {textS.card}>
          <h3 className ='title'>{textContent.title}</h3> 
          <div dangerouslySetInnerHTML={
          {__html: `${textContent.text.childMarkdownRemark.html}`} }/>
          </div>
         <div >
          <h3 className ='title'> {textContent.polskiTytu} </h3>
          <div dangerouslySetInnerHTML={
          {__html: `${textContent.polskiTekst.childMarkdownRemark.html}`} }/>
          </div> 
           
        </div> 
     
      </div>
      
      </Layout>)} 
    else
    {return (
        <Layout>
        
        <div className={textS.info}> 
        <audio controls>
                  <source src={textContent.music.file.url} type="audio/mpeg" />
            </audio> 
         <h1>{textContent.artists}</h1> 
         <div className={textS.content}>
       <div className = {textS.card}>
           <h3 className ='title'>{textContent.title}</h3> 
         <div dangerouslySetInnerHTML={
            {__html: `${textContent.text.childMarkdownRemark.html}`} }/>
          </div>
            <div>
            <h3 className ='title'> {textContent.polskiTytu}</h3>
            <div dangerouslySetInnerHTML={
           {__html: `${textContent.polskiTekst.childMarkdownRemark.html}`} }/>
         </div> 
            
            </div> 
             
         </div>
        
        </Layout>
    )
}}

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
    music {
      file {
        url
      }     
    }
  }

}


`


