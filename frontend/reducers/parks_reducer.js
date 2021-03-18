import { RECEIVE_PARK } from '../actions/park_actions'


const parksReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PARK:
            newState[action.park.id] = action.park;
            return newState
        default:
            return state;
    }
}

export default parksReducer