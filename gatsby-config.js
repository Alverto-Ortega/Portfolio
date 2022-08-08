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
        //step1:search functionality
        {
            resolve: "@gatsby-contrib/gatsby-plugin-elasticlunr-search",
            options: {
                //fields to index:
                fields: ["title", "tags", "desc"],
                resolvers: {
                    //resolving fields for source
                    Mdx: {
                        title: node => node.frontmatter.title,
                        tags: node => node.frontmatter.tags,
                        desc: node => node.frontmatter.desc,
                        path: node => "/blog"+node.fields.slug,
                    },
                },
                //only use nodes where frontmatter is of blog type for searchability
                filter: (node, getNode) => node.frontmatter.type === "Blog",

            },
        },
        `gatsby-plugin-mdx`,
        'gatsby-plugin-postcss',
    ],
};