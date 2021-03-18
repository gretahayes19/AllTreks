import React from 'react'


const Home = ({currentUser}) => {
    return (
        <div>
            <div className="homepage">
                <div className="homepage-content">
                    <h1>Find your next favorite trail</h1>
                </div>

            </div>
            <div className="homepage-sub">
                <h2>100,000+ trails. 20 million explorers. Endless memories.</h2>
                <p>The beauty of nature doesn’t need to be hard to find. Our goal is simple - build the largest collection of hand-curated trail guides, so you can explore the outdoors with confidence. Anytime. Anywhere.</p>
            </div>
        </div>

    )
}

export default Home