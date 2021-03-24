import { RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW } from '../actions/review_actions'


const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case REMOVE_REVIEW:
            newState[action.park.id] = action.park;
            return newState
        default:
            return state;
    }
}

export default reviewsReducer