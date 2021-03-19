import React from 'react'
import HikeIndexItem from './hike_index_item'

const HikeIndex = ({hikes, park}) => {
    return (
        <ul className="hike-index">
            {hikes.map((hike, idx) => (
                <HikeIndexItem key={hike.id} hike={hike} idx={idx} park={park}/>
            ))}
        </ul>
    )
}

export default HikeIndex