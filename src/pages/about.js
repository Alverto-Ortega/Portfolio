import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";


export default function About({ data }){
    const {mdx: {body}, graphCmsPhantom: {hobbies} } = data;
    return (
        <Layout>
            
            <div className = "max-w-5xl mx-auto py-20 lg:py-30 text-center">
                <MDXRenderer>{body}</MDXRenderer>
                <div>
                    <h2>My Hobbies</h2>
                    {hobbies.join(",")}
                </div>
            </div>
        </Layout>
    );
};

//query(s):
export const query = graphql`
{
    mdx(frontmatter: {type: {eq: "bio"}}){
        body
    }
    graphCmsPhantom{
        hobbies
    }
}`;
