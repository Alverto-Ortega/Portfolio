import React from "react";
import { Link } from "gatsby";

const Pagination = ({numPages, currentPage
 }) => {
    var pageArray = [];
    for(var i=1; i <= numPages; i++){
        pageArray[i] = i;
        return (
            <div>
                <ul>
                    {currentPage !== 1 && (
                        <li>
                            <Link to={currentPage === 2 ? `/blog` : `/blog/${currentPage-1}`}>
                                Previous
                            </Link>
                        </li>
                    )}
                    {/* {pageArray.map((pageNum) => (
                        <li>
                            <Link to={pageNum === 1 ? `/blog` : `/blog/${currentPage}`}>            
                            </Link>
                            
                        </li>

                    ))} */}
                        {/* link back to first page */}
                        <li>
                            <Link to={`/blog` }>
                                First Page: 1
                            </Link>
                        </li>
                        {/* link to current page */}
                        <li>
                            <Link to={currentPage === 1 ? `/blog` : `/blog/${currentPage}` }>
                                Current Page: {currentPage}
                            </Link>
                        </li>
                        {/* link to last page */}
                        <li>
                            <Link to={`/blog/${numPages}` }>
                                Last Page:{numPages}
                            </Link>
                        </li>
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
    console.log("page array",pageArray)
};

export default Pagination;