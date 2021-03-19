import React from 'react'

const HikeIndexItem = ({ hike, park, idx }) => {
    return (

        <li className="hike-item">
            <img className="hike-item-pics" src={hike.coverPhotoURL} alt="alt" />
            <div className="hike-item-content">
                <h3 className="header-text3">{`#${idx + 1} - ${hike.name}`}</h3>
                <p>{park.name}</p>
            </div>

        </li>

 
    )
}

export default HikeIndexItem