import React from 'react'


class SearchResults extends React.Component {

    render () {

        return (
            <ul>
                {this.props.results.map(result => (
                    <li>{result.name}</li>
                ))}
            </ul>
        )
    }
}

export default SearchResults