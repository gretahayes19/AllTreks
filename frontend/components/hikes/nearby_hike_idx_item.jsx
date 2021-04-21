import React from 'react'
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const NearbyHikeIndexItem = ({ hike, park, idx }) => {

    const avgRating = hike.avg_rating
    const numReviews = hike.num_reviews
    const starOps = {
        size: 18,
        isHalf: true,
        edit: false,
        value: parseFloat(avgRating),
    };

    return (

        <Link to={`/hikes/${hike.id}`} className="nearby-hike-item">
            <img className="hike-item-pics" src={hike.coverPhotoURL} alt="alt" />
            <div className="nearby-hike-item-content">
                <h3 className="header-text3">{hike.name}</h3>
                <p>{park}</p>
                {/* <p><span className={`hike-difficulty ${hike.difficulty}`}>{hike.difficulty}</span></p> */}
                <div className="difficulty-rating">
                    <p><span className={`hike-difficulty ${hike.difficulty}`}>
                        {hike.difficulty}</span>
                    </p>
                    <ReactStars {...starOps} />
                    <p className="num-reviews">({numReviews})</p>
                </div>
                <p>Length: {hike.distance} mi</p>
            </div>

        </Link>


    )
}

export default NearbyHikeIndexItem