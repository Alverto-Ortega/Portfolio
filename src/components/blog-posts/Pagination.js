import React from "react";
import { Link } from "gatsby";

const Pagination = ({ numPages, currentPage }) => {
    var pageArray = [];
    for(var i=1; i <= numPages; i++){
        pageArray[i] = i;
        return (
            <div>
                <ul>
                    {currentPage !== 1 && (
                        <li>
                            <Link to={currentPage === 2 ? "/blog": `/blog/${currentPage-1}`}>
                                Previous
                            </Link>
                        </li>
                    )}
                    {pageArray.map((pageNum) => (
                        <li key={`pageNum_${pageNum}`}>
                            <Link to={pageNum === 1 ? "/blog": `/blog/${pageNum}`}>
                                {pageNum}
                            </Link>
                        </li>
                    ))}
                    {currentPage !== numPages && (
                        <li>
                            <Link to={`/blog/${currentPage + 1}`}>
                                Next
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        );
    };
};

export default Pagination;