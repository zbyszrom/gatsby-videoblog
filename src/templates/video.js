import React from 'react';
import { graphql, navigate } from 'gatsby';
import Layout from '../components/layout';
import styled from "styled-components"




const VideoTemplate = (props) => {

    const videoContent = props.data.contentfulVideo

    const Excerpt = styled.div`
    font-family: Muli,sans-serif;
    font-size: 16px;
    line-height: 32px;
    font-weight: 300;
    color: #fff;
    font-style: italic; 
    `

    return (

        <Layout> 
          
        <div >
            
            <div >
            
            <h1 >{videoContent.title}</h1>
            
            <div>
            <iframe   title = {videoContent.title} src={props.data.contentfulVideo.videoUrl}
                 frameborder="0"   width="960" height="540"  allowfullscreen="allowfullscreen"></iframe>
            </div>     
            <div>
            <p>Główny utwór: </p><h3>{videoContent.lyric.artists}</h3>
            <p className='title'> {videoContent.lyric.title}</p>
            
            <Excerpt dangerouslySetInnerHTML={
            {__html: `${videoContent.lyric.text.childMarkdownRemark.excerpt}`} }/>
            <p className='title'> {videoContent.lyric.polskiTytu} </p>
            <Excerpt dangerouslySetInnerHTML={
            {__html: `${videoContent.lyric.polskiTekst.childMarkdownRemark.excerpt}`} }/>
            <p className = 'link' onClick={() => navigate(`/text/${videoContent.lyric.slug}`)}>Cały utwór</p>
            </div>   
        </div>
        </div>
        
        </Layout>
    )
}

export default VideoTemplate;

export const query = graphql`
        query VideoTemplate($id: String!){
            contentfulVideo(id: {eq: $id}) {
                id
                slug
                title
                videoUrl
                lyric {
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
                  slug
                }
              }

        }`


