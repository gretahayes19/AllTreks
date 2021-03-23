import React from 'react'
import { Link } from "react-router-dom";

const NearbyHikeIndexItem = ({ hike, park, idx }) => {
    return (

        <Link to={`/hikes/${hike.id}`} className="nearby-hike-item">
            <img className="hike-item-pics" src={hike.coverPhotoURL} alt="alt" />
            <div className="nearby-hike-item-content">
                <h3 className="header-text3">{hike.name}</h3>
                <p>{park}</p>
                <p><span className={`hike-difficulty ${hike.difficulty}`}>{hike.difficulty}</span></p>
                <p>Length: {hike.distance} mi</p>
            </div>

        </Link>


    )
}

export default NearbyHikeIndexItem