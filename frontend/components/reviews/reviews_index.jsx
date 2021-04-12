import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faHiking } from "@fortawesome/free-solid-svg-icons";
import ReactStars from "react-rating-stars-component";


const ReviewIndex = ({ reviews }) => {
    const starOps = {
        size: 20,
        isHalf: false,
        edit: false,
    };

    return (
        <ul className="review-index">
            {reviews.map((review, idx) => (
                <li className="review-item" key={review.id}>
                    <div className="review-header">
                        <div className="profile-pic" >
                            < FontAwesomeIcon icon={faHiking} />
                        </div>
                        {review.reviewer.firstname} {review.reviewer.lastname}
                       <br/>
                        <ReactStars value={review.rating} {...starOps} />

                    </div>
                    <p>{review.review_text}</p>
                    
                </li>
            ))}
        </ul>
    )
}

export default ReviewIndex 