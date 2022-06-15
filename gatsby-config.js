//define site's metadata, plugins and other general configs:
require("dotenv").config()
module.exports = {
    siteMetadata:{
        siteUrl: 'https://ortegaportfolio.com',
        name: 'Alverto Ortega',
        role: 'Freelance Developer',
        bio: 'Passionate at learning the Full-stack Web development technology'
    },
    plugins:[
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `mdx-bio`,
                path: `${__dirname}/MDX/bio`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `mdx-blog`,
                path: `${__dirname}/MDX/blog`,
            },
        },
        `gatsby-plugin-mdx`,
        'gatsby-plugin-postcss',
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-source-graphcms',
            options: {
                endpoint: process.env.GRAPHCMS_ENDPOINT,
            },
        },
    ],
};