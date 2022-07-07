import React, { Fragment } from "react";
import { Link } from "gatsby";
import TagList from "./TagList";
import Layout from "../layout/Layout";

const NodeData = ({ numPages, currentPage ,nodes }) => {
    
    return(
        <Layout>
            <div  className="max-w-5xl mx-auto space-y-8 py-6 md:py-12">
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
        </Layout>
    );
};

export default NodeData;