import React from 'react'
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";


const HikeIndexItem = ({ hike, park, idx }) => {

    const avgRating = hike.avg_rating

    const starOps = {
        size: 18,
        isHalf: true,
        edit: false,
        value: avgRating,
    };

    return (

        <Link to={`/hikes/${hike.id}`} className="hike-item">
            <img className="hike-item-pics" src={hike.coverPhotoURL} alt="alt" />
            <div className="hike-item-content">
                <h3 className="header-text3">{`#${idx + 1} - ${hike.name}`}</h3>
                <p>{park}</p>
                <p><span className={`hike-difficulty ${hike.difficulty}`}>
                    {hike.difficulty}</span>
                    <ReactStars {...starOps} />
                    </p>
                <p>Length: {hike.distance} mi</p>
                <p className="hike-description">{hike.description}</p>
            </div>
        </Link>

 
    )
}

export default HikeIndexItem