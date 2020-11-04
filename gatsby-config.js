/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Singh`,
    titleTemplate: `%s · a starting point`,
    author: {
      name: `Nicklas Bryntesson`,
      summary: `I need more superpowers.`,
    },
    description: `Gatsby Single Page App Project `,
    url: `https://www.nicklasbryntesson.se`,
    logo: `static/logo.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
  ],
}
