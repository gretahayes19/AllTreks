import { RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW } from '../actions/review_actions'


const reviewsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState = Object.assign([], state);
    switch (action.type) {
        case REMOVE_REVIEW:
            delete newState[action.reviewId];
            return newState;
        case RECEIVE_REVIEWS:
            return action.reviews;
        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review
            return newState;
        default:
            return state;
    }
}

export default reviewsReducer