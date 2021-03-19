import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            query: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    update() {
        return(e) => {
            this.setState({query: e.target.value})
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchSearchResults(this.state.query)
    }

    render () {

        
        return (
            <div className="search-bar">
                <form onSubmit={this.handleSubmit} className="search-input">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder="Enter a park or trail name" onChange={this.update()}/>
                    <button>Search</button>
                </form>
            </div> 
        )
    }
}

export default SearchBar