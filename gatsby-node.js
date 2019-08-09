const path = require("path")

module.exports.createPages = async ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions

  const {
    data
  } = await graphql(`
    {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.tours.edges.forEach(({
    node
  }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve("./src/templates/tour-template.jsx"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.posts.edges.forEach(({
    node
  }) => {
    createPage({
      //what path will be created for each post created
      path: `blog/${node.slug}`,
      component: path.resolve("./src/templates/blog-template.jsx"),
      //when we create a page we pass variable into template
      context: {
        slug: node.slug
      }
    })
  })
}