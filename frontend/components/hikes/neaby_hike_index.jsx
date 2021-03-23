import React from 'react'
import NearbyHikeIndexItem from './nearby_hike_idx_item'

const NearbyHikeIndex = ({ hikes, park }) => {
    return (
        <ul className="nearby-hike-index">
            {hikes.map((hike, idx) => (
                <NearbyHikeIndexItem key={hike.id} hike={hike} idx={idx} park={park} />
            ))}
        </ul>
    )
}

export default NearbyHikeIndex