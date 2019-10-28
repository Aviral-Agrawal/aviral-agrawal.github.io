module.exports = {
  siteMetadata: {
    title: 'Aviral Agrawal',
    siteUrl: 'http://aviral-agrawal.github.io',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Signika`,
          `source sans pro\:300,400,600` // you can also specify font weights and styles
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-130172537-1",
        head: false,
      }
    },
	{
      resolve: `gatsby-transformer-sharp`
    },
  ],
}
