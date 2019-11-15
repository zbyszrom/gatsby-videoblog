import React from 'react'
import { Link, graphql, navigate } from 'gatsby'
import Layout from '../components/layout'
import NavCategories from '../components/nav-categories'

const VideosArchive = (props) => {

    return (
        <Layout>
            <NavCategories/>
            <h2>Tu bedą wszystkie filmy</h2>
        </Layout>
    )

}
export default VideosArchive