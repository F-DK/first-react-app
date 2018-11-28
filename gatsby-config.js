module.exports = {
  siteMetadata: {
    title: 'Aki\u0027s first React app',
    description: 'Fun to learn modern coding courses for designers including React, Different styling methods, static data with JSON, GraphQL, and contemporary content management',
    keywords: 'courses, react, framer x, designers, components, graphql, contentful',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '48m45um708kp',
        accessToken: '2b8670d433e81ed73f0d61b7171817cc912a8515adcc26548784d2b51dd8c3ec'
      }
    }
  ],
}
