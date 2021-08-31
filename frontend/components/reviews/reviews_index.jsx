import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faHiking } from "@fortawesome/free-solid-svg-icons";
import ReactStars from "react-rating-stars-component";
import EditReviewFormContainer from './edit_review_form_container'

const ReviewIndex = ({ editForm, showEditForm, deleteReview, reviews, currentUser, hideEditForm }) => {
    const starOps = {
        size: 17,
        isHalf: false,
        edit: false,
    };

    const updatestarOps = {
        size: 30,
        value: 2.5,
        isHalf: false,
        // onChange: (newValue) => {
        //     this.setState({ rating: newValue });
        // },
    };
    

    function formatDate(date) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

        let splitDate = date.split("-");
        return `${monthNames[parseInt(splitDate[1]) - 1]} ${splitDate[2]}, ${splitDate[0]}`;
    }



    // console.log(editForm)
    // console.log(((review.id === currentUser.id) && editForm))
    return (
        <ul className="review-index">
            {reviews.map((review, idx) => (
                ((review.user_id === currentUser.id) && editForm) ? 
                (
                        <EditReviewFormContainer initialState={review} hideEditForm={hideEditForm}/>
                ) :
                ( <li className="review-item" key={review.id}>
                    <div className="review-pic-name">
                        <div className="profile-pic" >
                            < FontAwesomeIcon icon={faHiking} />
                        </div>
                        <div className="review-header">
                            <h3 className="header-text3">{review.reviewer.firstname} {review.reviewer.lastname}</h3>
                            <div className="star-date"> 
                                <ReactStars value={review.rating} {...starOps} />
                                <p>{formatDate(review.activity_date)}</p>
                            </div>

                        </div>
                    </div>

                    <p className="review-text">{review.review_text}</p>
                    {currentUser.id === review.user_id ? (
                        <p><span className="delete-review-text" 
                            onClick={() => deleteReview(review.id)}>Delete</span>  |  
                        <span className="edit-review-text" 
                            onClick={() => showEditForm()}>Edit</span></p>
                        ) : null}
                </li>)

            ))}
        </ul>
    )
}

export default ReviewIndex 