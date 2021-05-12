/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Gatsby Tutorial',
    description: 'some description',
    author: 'John Doe',
    data: ['item1', 'item2'],
    person: { name: 'Peter', age: 32 }
  },
  plugins: [
    `gatsby-plugin-styled-components`
  ],
}
