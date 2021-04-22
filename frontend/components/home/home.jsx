import React from 'react'
import SearchBarContainer from '../search/search_container'
import { Link } from "react-router-dom";


const Home = ({currentUser}) => {
    return (
        <div>
            <div className="homepage">
                <div className="homepage-content">
                    <h1>Find your next favorite trail</h1>
                    <SearchBarContainer />
                </div>

            </div>
            <div className="homepage-sub">
                <h2>100,000+ trails. 20 million explorers. <br/> Endless memories.</h2>
                <p>The beauty of nature doesn’t need to be hard to find. Our goal is simple - build the largest collection of hand-curated trail guides, so you can explore the outdoors with confidence. Anytime. Anywhere.</p>
                {(!currentUser) ? (<Link to="/signup" className="sign-up-button-home">Sign up for free</Link>) : null }
            </div>
        </div>

    )
}

export default Home