import React, { useDebugValue } from 'react'
import ReactStars from "react-rating-stars-component";

const RatingStars = ({review}) => {

    const starOps = {
        size: 17,
        isHalf: false,
        edit: false,
 
    };



    return (
        <>
            <ReactStars {...starOps} value={review.rating} />

        </>
    )
}

export default RatingStars;