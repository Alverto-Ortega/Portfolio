//this file can be used to create pages programmatically based on dynamic data...
//imports
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const _ = require("lodash");

exports.createPages = async ({actions, graphql, reporter}) => {
    //destructure actions object to retrive createPage function
    const { createPage } = actions;
    //tell gatsby where to find templates:
    const BlogPostTemplate = path.resolve('./src/templates/blog-page.js');
    const BlogPreviewTemplate = path.resolve("./src/templates/blog-preview.js");
    const TagsTemplate = path.resolve("./src/templates/tags.js");
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
            tagsGroup: allMdx(filter: {frontmatter: {type: {eq: "Blog"}}}){
                group(field: frontmatter___tags){
                    tag: fieldValue
                    nodes{
                        id
                    }
                }
            }
        }
        
    `);
    const BlogPosts = BlogPostQuery.data.allMdx.nodes;
    const PostsPerPage = 2;
    const numPages =  Math.ceil(BlogPosts.length / PostsPerPage);

    //catch errors if unsuccessful:
    if(BlogPostQuery.errors){
        reporter.panicOnBuild("Error while running GraphQL query.");
        return;
    }

    //create a blog preview page for each page
    Array.from({ length: numPages}).forEach((_, i) => {
        createPage({
            path: i === 0 ? "/blog" : `/blog/${i + 1}`,
            component: BlogPreviewTemplate,
            context: {
                limit: PostsPerPage,
                skip: i * PostsPerPage,
                numPages,
                currentPage: i+1,
                slug: i === 0 ? "/blog" : `/blog/${i + 1}`,

            },
        });
    });
    //upon success, data is gathered. 
    //Now we can create blog post page
    BlogPosts.forEach(({fields: { slug } }) => {
            createPage({
                path: `blog${slug}`,
                component: BlogPostTemplate,
                defer: true,
                context: {
                    slug: slug,
                },
            });
    });
    
    //create tag page
    // only thing i need to figure out is the $skit value to be used for pagination in tags pages
    BlogPostQuery.data.tagsGroup.group.forEach((group, i) => {
        createPage({
            path: `/tags/${ _.kebabCase(group.tag) }/`,
            component: TagsTemplate,
            context: {
                tag: group.tag,            
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