const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {}

exports.onCreatePage = ({ page, actions }) => {}
