import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SearchResults from '../search/searchresults';

class SubNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "",
            focus: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    update() {
        return (e) => {
            this.setState({ query: e.target.value }, this.handleSubmit)
        }
    }

    handleFocus() {
        this.setState({ focus: true })
    }

    handleBlur() {
        this.setState({ focus: false })
    }

    handleSubmit(e) {
        this.props.fetchSearchResults(this.state.query)
    }



    render() {

        const { results, parkName } = this.props

        return (
            <>
            <div className="sub-nav">
                <div className="breadcrumbs">
                    <p>United State of America</p>
                    <FontAwesomeIcon icon={faChevronRight} />
                    <p>Washington</p> 
                    <FontAwesomeIcon icon={faChevronRight} />
                    <p>{parkName}</p>
                </div>
                <div className="-sub-search-bar" onFocus={this.handleFocus} onBlur={this.handleBlur}>
                    <form onSubmit={this.handleSubmit} className="sub-search-input">
                        <input type="text" placeholder="Enter a park or trail name" onChange={this.update()} />
                        <FontAwesomeIcon icon={faSearch} className="search-icon"/>
                    </form>
                        {(this.state.query !== "") ? (
                            <SearchResults parent="sub" results={results} query={this.state.query} fetchSearchResults={this.props.fetchSearchResults} />
                        ) : null}
                </div>
            </div>

            </>
           

        )
    }
}

export default SubNav