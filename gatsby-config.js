//define site's metadata, plugins and other general configs:
module.exports = {
    siteMetadata:{
        siteUrl: 'https://ortegaportfolio.com',
        name: 'Alverto Ortega',
        role: 'Freelance Developer',
        bio: 'Passionate at learning the Full-stack Web development technology'
    },
    plugins:[
        'gatsby-plugin-postcss',
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'markdown-bio',
                path: `${__dirname}/MD`,
            },
        },
    ],
};