import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { Index } from "elasticlunr";
//step2:search functionality
const Search = ({ searchIndex }) => {
    const [ query, setQuery ] = useState("");
    let [ index, setIndex ] = useState();
    let [ results, setResults ] = useState([]);
//useEffect hook loading index into state hook in order to query
    useEffect( () => { setIndex( Index.load( searchIndex )); }, [ searchIndex ]);
//when search function is called, search index using query string
//'expand' option tells elasticlunr to allow partial matches if more than two charactes are entered in the search
//finaly after searching index, maps over documentStore and return the document results
//result is passed to state via useState hook
    const search = (evt) => {
        const query = evt.target.value;
        setQuery(query);
        setResults( index.search( query, { expand: query.length > 2 }).map( ( { ref }) => index.documentStore.getDoc( ref ) ) );
    };
//limit results on page for better UX
    const searchResultSize = 3;

    return(
        <div className="relative w-64 text-gray-600">
            <input type="search" name="search" placeholder="Search" autoComplete="off" aria-label="Search" onChange={search} value={query} />
            { results.length > 0 && 
            ( //map over results from the state then render to screen, indicating how more more results there are if exceeds limited results.
                <div> 
                    { results.slice(0, searchResultSize).map( ({ title, description, path }) =>
                    ( <Link key={path} to={path}> <p> { title} </p><p className="text-xs"> {description} </p> </Link> ))
                    }
                    {results.length > searchResultSize && ( <Link to={`/search?q=${query}`}> <p> + { results.length - searchResultSize } more! </p></Link> )}
                </div>
            )}
        </div>
    );

};

export default Search;