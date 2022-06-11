//define site's metadata, plugins and other general configs:
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
                path: `${__dirname}/MDX`,
            },
        },
        `gatsby-plugin-mdx`,
        'gatsby-plugin-postcss',
    ],
};