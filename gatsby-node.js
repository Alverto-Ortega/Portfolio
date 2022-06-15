//this file can be used to create pages programmatically based on dynamic data...
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
//createPages function to create pages dynamically:
exports.createPages = async ({actions, graphql, reporter }) => {
    //destructure actions object to retrive createPage function
    const { createPage } = actions;
    //tell gatsby where to find my blog post template:
    const BlogPostTemplate = path.resolve('./src/templates/blog-page.js');
    //query data using GraphQL:
    const BlogPostQuery = await graphql(`
        {
            allMdx(filter: {frontmatter: { type: { eq: "Blog" }}}){
                nodes {
                    fields{
                        slug
                    }
                }
            }
        }
    `);
    //catch errors if unsuccessful:
    if(BlogPostQuery.errors){
        reporter.panicOnBuild("Error while running GraphQL query.");
        return;
    }
    //upon success, data is gathered. Now we can create pages for each data node
    BlogPostQuery.data.allMdx.nodes.forEach(({
        fields: { slug } }) => {
            createPage({
                path: `blog${slug}`,
                component: BlogPostTemplate,
                // to build pages the first time it is requested instead of waiting for all to be built at build time
                defer: true,
                context: {
                    slug: slug,
                },
            });
        });

};

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if( node.internal.type === `Mdx`){
        const slug = createFilePath({ node, getNode, basePath: `pages` });
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
};