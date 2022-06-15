//component to render a list of tag badges on the screen when needed
import React, { Fragment } from "react";

const TagList = ({ tags }) => {
    return (
        <Fragment>
            {tags.map( (tag) =>(
                <div key={tag} className="rounded-full px-2 py-1 uppercase text-xs 
                bg-blue-600 text-white">
                    <p>{tag}</p>
                </div>
            ) )}
        </Fragment>
    );
};

export default TagList;