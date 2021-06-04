module.exports = {
  siteMetadata: {
    title: 'Figlak Portfolio',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'locale',
        path: `${__dirname}/locales`,
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `pl`],
        defaultLanguage: `en`,
        siteUrl: `https://example.com/`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
  ],
};
