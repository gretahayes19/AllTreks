import * as ReviewAPIUtil from '../util/review_api_util'


export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"
export const REMOVE_REVIEW = "REMOVE_REVIEWS"

export const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

export const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
}

export const removeReview = (reviewId) => {
    return {
        type: RECEIVE_REVIEWS,
        reviewId
    }
}

export const fetchReviews = () => dispatch => {
    return ReviewAPIUtil.fetchReviews()
        .then(reviews => dispatch(receiveReviews(reviews)));
}

export const createReview = (review) => dispatch => {
    return ReviewAPIUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)));
}

export const updateReview = (review) => dispatch => {
    return ReviewAPIUtil.updateReview(review)
        .then(review => dispatch(receiveReview(review)));
}

export const deleteReview = (reviewId) => dispatch => {
    return ReviewAPIUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview()));
}