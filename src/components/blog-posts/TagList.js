//component to render a list of tag badges on the screen when needed
import React, { Fragment } from "react";
import { Link } from "gatsby";
import { kebabCase } from "lodash";

const TagList = ({ tags }) => {
    return (
        <Fragment>
            {tags.map( (tag) =>(
                <Link key={tag} to={`/tags/${kebabCase(tag)}`}>
                    <div key={tag} className="rounded-full px-2 py-1 uppercase text-xs 
                    bg-blue-600 text-white">
                        <p>{tag}</p>
                    </div>
                </Link>
            ) )}
        </Fragment>
    );
};

export default TagList;