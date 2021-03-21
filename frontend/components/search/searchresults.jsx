import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faMapSigns } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


class SearchResults extends React.Component {



    render () {

        const noResults = <li className="search-result-item">No Results Found</li>

        const yesResults = this.props.results.map((result, idx) => (
                <li className="search-result-item" key={idx}>
                    {result.category === "Hike" ? (
                    <Link to={`/hikes/${result.id}`} >
                        <FontAwesomeIcon icon={faMapSigns} className="result-hike-icon"/>
                            {result.name}
                        </Link>
                    ) : (
                        <Link to={`/parks/${result.id}`}>
                            <FontAwesomeIcon icon={faTree} className="result-park-icon"/>
                            {result.name}
                        </Link>
                    )}
                </li>
            ))
        

        return (
            <ul className="search-results">
                {(this.props.results.length) ? yesResults : noResults}
            </ul>
        )
    }
}

export default SearchResults