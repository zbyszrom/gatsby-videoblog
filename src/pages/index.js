import React from "react"
//import Trap from '../audio/TrapperMan.mp3'
import Layout from "../components/layout"
import Intro from '../components/intro'
import Featured from '../components/featured'


const IndexPage = () => (
  <Layout> 
    <Intro/>
    <Featured/>
  </Layout>
)

export default IndexPage


/*<audio controls>
<source src={Trap} type="audio/mpeg" />
  Your browser does not support the audio tag.
</audio>*/
