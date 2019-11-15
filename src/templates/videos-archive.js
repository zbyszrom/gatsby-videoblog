import React from 'react'
import { Link, graphql, navigate } from 'gatsby'
import Layout from '../components/layout'
import NavCategories from '../components/nav-categories'

const VideoArchive = (props) => {

    return (
        <Layout>
            <NavCategories/>
            <h2>Tu będą filmy róznych kategorii</h2>
        </Layout>
    )

}
export default VideoArchive