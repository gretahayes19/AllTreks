import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faHiking } from "@fortawesome/free-solid-svg-icons";
import ReactStars from "react-rating-stars-component";


const ReviewIndex = ({ reviews }) => {
    const starOps = {
        size: 17,
        isHalf: false,
        edit: false,
    };

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    

    return (
        <ul className="review-index">
            {reviews.map((review, idx) => (
                <li className="review-item" key={review.id}>
                    <div className="review-pic-name">
                        <div className="profile-pic" >
                            < FontAwesomeIcon icon={faHiking} />
                        </div>
                        <div className="review-header">
                            <h3 className="header-text3">{review.reviewer.firstname} {review.reviewer.lastname}</h3>
                            
                            <ReactStars value={review.rating} {...starOps} />
                        </div>
                    </div>

                    <p className="review-text">{review.review_text}</p>
                    
                </li>
            ))}
        </ul>
    )
}

export default ReviewIndex 