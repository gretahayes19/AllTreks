import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faMapSigns } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


class SearchResults extends React.Component {



    render () {



        return (
            <ul>
                {this.props.results.map((result, idx) => (
                    <li className="search-result-item" key={idx}>
                        {result.category === "Hike" ? (
                            <Link to={`/hikes/${result.id}`}>
                                <FontAwesomeIcon icon={faMapSigns} />
                                {result.name}
                            </Link>
                        ) : (
                            <Link to={`/parks/${result.id}`}>
                                <FontAwesomeIcon icon={faTree} />
                                {result.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        )
    }
}

export default SearchResults