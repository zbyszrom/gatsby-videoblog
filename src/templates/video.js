import React from 'react';
import { graphql, navigate } from 'gatsby';
import Layout from '../components/layout';




const VideoTemplate = (props) => {
    return (

        <Layout>   
        <div >
            
            <div >
            
            <h1 >{props.data.contentfulVideo.title}</h1>
            
            <div>
            <iframe   title = {props.data.contentfulVideo.title} src={props.data.contentfulVideo.videoUrl}
                 frameborder="0"   width="960" height="540"  allowfullscreen="allowfullscreen"></iframe>
            </div>     
            <div>
            <p>Główny utwór: </p><h3>{props.data.contentfulVideo.lyric.artists}</h3>
            <p>-- {props.data.contentfulVideo.lyric.title} --</p>
            
            <div dangerouslySetInnerHTML={
            {__html: `${props.data.contentfulVideo.lyric.text.childMarkdownRemark.excerpt}`} }/>
            <p>-- {props.data.contentfulVideo.lyric.polskiTytu} --</p>
            <div dangerouslySetInnerHTML={
            {__html: `${props.data.contentfulVideo.lyric.polskiTekst.childMarkdownRemark.excerpt}`} }/>
            <p onClick={() => navigate(`/text/${props.data.contentfulVideo.lyric.slug}`)}>Cały utwór</p>
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


