import React from "react";
import { graphql} from "gatsby";
import Layout from "../components/layout/Layout";
import { Link } from "gatsby";
import TagList from "../components/blog-posts/TagList";

export default function Tags({pageContext, data }){
    const {tag} = pageContext;
    const {blogposts: {nodes},} = data;
    return (
        <Layout>
            <div>
                <p>Posts tagged with "{tag}"</p>
                <div  className="max-w-5xl mx-auto space-y-8 py-6 md:py-12 mb-8">
                    {nodes.map( ({ frontmatter: { date, tags, title, desc }, fields: { slug } }) => (
                        <div key={title.toString()} >
                            <Link to={`/blog${slug}`}>
                                <h2 className="text-2xl font-medium">{title}</h2>
                                <div className="flex items-center space-x-2">
                                    <p className="text-lg opacity-50">{date.split("T")[0]}</p>
                                    <TagList tags={tags} />
                                </div>
                                <p>{desc}</p>
                            </Link>

                        </div>
                        
                    ))}                    
                </div>

            </div>
            
        </Layout>
    );
    
};

//pulls the following data for each tag :
//tag matching blogs with the data: numbered amount of matches, tags,title,description, url
export const pageQuery = graphql`
    query($tag: String){
        blogposts: allMdx(
            sort: {fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: {tags: { in: [$tag]},
            type: {eq: "Blog" }}}
           
        ){
            nodes{
                frontmatter{
                    date
                    title
                    tags
                    desc
                }
                fields{
                    slug
                }
            }
            totalCount

        }
    }
`;
