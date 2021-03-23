import React from 'react'

const ReviewIndex = ({ reviews }) => {
    return (
        <ul className="review-index">
            {reviews.map((review, idx) => (
                <li key={review.id}>
                    {review.review_text}
                </li>
            ))}
        </ul>
    )
}

export default ReviewIndex