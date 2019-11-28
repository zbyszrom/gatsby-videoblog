

const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
 // Query for nodes to use in creating pages.
 resolve(
   graphql(request).then(result => {
     if (result.errors) {
       reject(result.errors)
     }
     return result;
   })
 )
});

// Implement the Gatsby API "createPages". This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
 const { createPage } = actions;

// Create pages for each video.
 const getVideo = makeRequest(graphql, `
   {
     allContentfulVideo (
      sort: { fields: videoCreatedAt, order: DESC }
       )
     {
       edges {
         node {
           id
           slug
         }
       }
     }
   }
   `).then(result => {
   result.data.allContentfulVideo.edges.forEach(({ node }) => {
     createPage({
       path: `video/${node.slug}`,
       component: path.resolve(`src/templates/video.js`),
       context: {
         id: node.id,
       },
     })
   })
});

//Create pages for each text.
 const getLyric = makeRequest(graphql, `
   {
     allContentfulLyric (
      sort: { fields: [createdAt], order: DESC }
    )
  {
       edges {
         node {
           id
           slug
         }
       }
     }
   }
   `).then(result => {
   result.data.allContentfulLyric.edges.forEach(({ node }) => {
     createPage({
       path: `text/${node.slug}`,
       component: path.resolve(`src/templates/text.js`),
       context: {
         id: node.id,
       },
     })
   })
});




// Create archive page for all videos, including pagination
const getArchive = makeRequest(graphql, `
{
  allContentfulVideo (
    sort: { fields: videoCreatedAt, order: DESC }
  )
  {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`).then(result => {
  const videos = result.data.allContentfulVideo.edges
  const videosPerPage = 9
  const numPages = Math.ceil(videos.length / videosPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/video` : `/video/${i + 1}`,
      component: path.resolve("./src/templates/videos-archive.js"),
      context: {
        limit: videosPerPage,
        skip: i * videosPerPage,
        numPages,
        currentPage: i + 1
      },
    })
  })
});


//Create am category page, including pagination

const getAm = makeRequest(graphql, `
{
  allContentfulVideo(filter: {category: {slug: {eq: "am"}}}) {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`).then(result => {
  const videos = result.data.allContentfulVideo.edges
  const videosPerPage = 9
  const numPages = Math.ceil(videos.length / videosPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/category/am` : `/category/am/${i + 1}`,
      component: path.resolve("./src/templates/video-categories/america.js"),
      context: {
        limit: videosPerPage,
        skip: i * videosPerPage,
        numPages,
        currentPage: i + 1
      },
    })
  })
});

//Create eu category page, including pagination

const getEu= makeRequest(graphql, `
{
  allContentfulVideo(filter: {category: {slug: {eq: "eu"}}}) {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`).then(result => {
  const videos = result.data.allContentfulVideo.edges
  const videosPerPage = 9
  const numPages = Math.ceil(videos.length / videosPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/category/eu` : `/category/eu/${i + 1}`,
      component: path.resolve("./src/templates/video-categories/europe.js"),
      context: {
        limit: videosPerPage,
        skip: i * videosPerPage,
        numPages,
        currentPage: i + 1
      },
    })
  })
});

//Create pl category page, including pagination

const getPl= makeRequest(graphql, `
{
  allContentfulVideo(filter: {category: {slug: {eq: "pl"}}}) {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`).then(result => {
  const videos = result.data.allContentfulVideo.edges
  const videosPerPage = 9
  const numPages = Math.ceil(videos.length / videosPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/category/pl` : `/category/pl/${i + 1}`,
      component: path.resolve("./src/templates/video-categories/poland.js"),
      context: {
        limit: videosPerPage,
        skip: i * videosPerPage,
        numPages,
        currentPage: i + 1
      },
    })
  })
});

//Create rep category page, including pagination

const getRep= makeRequest(graphql, `
{
  allContentfulVideo(filter: {category: {slug: {eq: "rep"}}}) {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`).then(result => {
  const videos = result.data.allContentfulVideo.edges
  const videosPerPage = 9
  const numPages = Math.ceil(videos.length / videosPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/category/rep` : `/category/rep/${i + 1}`,
      component: path.resolve("./src/templates/video-categories/reports.js"),
      context: {
        limit: videosPerPage,
        skip: i * videosPerPage,
        numPages,
        currentPage: i + 1
      },
    })
  })
});

//Create misc category page, including pagination

const getMisc= makeRequest(graphql, `
{
  allContentfulVideo(filter: {category: {slug: {eq: "misc"}}}) {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`).then(result => {
  const videos = result.data.allContentfulVideo.edges
  const videosPerPage = 9
  const numPages = Math.ceil(videos.length / videosPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/category/misc` : `/category/misc/${i + 1}`,
      component: path.resolve("./src/templates/video-categories/misc.js"),
      context: {
        limit: videosPerPage,
        skip: i * videosPerPage,
        numPages,
        currentPage: i + 1
      },
    })
  })
});

//Create texts page, including pagination

const getLyrics= makeRequest(graphql, `
{
  allContentfulLyric {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`).then(result => {
  const lyrics = result.data.allContentfulLyric.edges
  const lyricsPerPage = 9
  const numPages = Math.ceil(lyrics.length / lyricsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/texts` : `/texts/${i + 1}`,
      component: path.resolve("./src/templates/texts-archive.js"),
      context: {
        limit: lyricsPerPage,
        skip: i * lyricsPerPage,
        numPages,
        currentPage: i + 1
      },
    })
  })
});


//Create English category page, including pagination

const getEnglish= makeRequest(graphql, `
{
  allContentfulLyric(filter: {categoryLyrics: {slug: {eq: "en"}}}) {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`).then(result => {
  const lyrics = result.data.allContentfulLyric.edges
  const lyricsPerPage = 9
  const numPages = Math.ceil(lyrics.length / lyricsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/lcategory/en` : `/lcategory/en/${i + 1}`,
      component: path.resolve("./src/templates/text_categories/english.js"),
      context: {
        limit: lyricsPerPage,
        skip: i * lyricsPerPage,
        numPages,
        currentPage: i + 1
      },
    })
  })
});
//Create Polish category page, including pagination

const getPolish= makeRequest(graphql, `
{
  allContentfulLyric(filter: {categoryLyrics: {slug: {eq: "pl"}}}) {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`).then(result => {
  const lyrics = result.data.allContentfulLyric.edges
  const lyricsPerPage = 9
  const numPages = Math.ceil(lyrics.length / lyricsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/lcategory/pl` : `/lcategory/pl/${i + 1}`,
      component: path.resolve("./src/templates/text_categories/polish.js"),
      context: {
        limit: lyricsPerPage,
        skip: i * lyricsPerPage,
        numPages,
        currentPage: i + 1
      },
    })
  })
});
//Create Music_Only category page, including pagination

const getMusic= makeRequest(graphql, `
{
  allContentfulLyric(filter: {categoryLyrics: {slug: {eq: "music"}}}) {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`).then(result => {
  const lyrics = result.data.allContentfulLyric.edges
  const lyricsPerPage = 9
  const numPages = Math.ceil(lyrics.length / lyricsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/lcategory/music` : `/lcategory/music/${i + 1}`,
      component: path.resolve("./src/templates/text_categories/music_only.js"),
      context: {
        limit: lyricsPerPage,
        skip: i * lyricsPerPage,
        numPages,
        currentPage: i + 1
      },
    })
  })
});







return Promise.all([
  getVideo,
  getArchive,
  getAm,
  getEu,
  getPl,
  getRep,
  getMisc,
  getLyric,
  getLyrics,
  getEnglish,
  getPolish,
  getMusic



  
 ])
};

