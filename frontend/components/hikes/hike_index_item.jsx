import React from 'react'
import { Link } from "react-router-dom";

const HikeIndexItem = ({ hike, park, idx }) => {
    return (

        <Link to={`/hikes/${hike.id}`}className="hike-item">
            <img className="hike-item-pics" src={hike.coverPhotoURL} alt="alt" />
            <div className="hike-item-content">
                <h3 className="header-text3">{`#${idx + 1} - ${hike.name}`}</h3>
                <p>{park.name}</p>
                <p><span className={`hike-difficulty ${hike.difficulty}`}>{hike.difficulty}</span></p>
                <p>Length: {hike.distance} mi</p>
                <p className="hike-description">{hike.description}</p>
            </div>

        </Link>

 
    )
}

export default HikeIndexItem