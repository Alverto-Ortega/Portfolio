import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Search from "./Search";
//step3:search functionality
const Header = () => (
    <div className="bg-black">
        <header className="flex justify-center px-2 w-full max-w-7xl mx-auto py-3">
            <div className="flex justify-center">
                <Link to="/" >
                    <div className="hover:bg-violet-500 rounded-lg p-2">
                        <p className="text-white">Home</p>
                    </div>
                </Link>
                <Link to="/about" >
                    <div className="hover:bg-violet-500 rounded-lg p-2">
                        <p className="text-white">About Me</p>
                    </div>
                </Link>
            </div>
            {/* step3:search functionality; retrive the site index and pass it to Search component.
            since this page is not a page component we cannot append the graphql query at the end of the page but 
            we can use StaticQuery to get data in this case the search ndex which is static.
            StaticQuery uses two props, query and render*/}
                <StaticQuery query={ graphql`
                    query SearchIndexQuery {
                        siteSearchIndex {
                            index
                        }
                }`}
                render={ data => (
                <Search searchIndex={ data.siteSearchIndex.index}/>
                )} 
                />
        </header>
    </div>
)

export default Header