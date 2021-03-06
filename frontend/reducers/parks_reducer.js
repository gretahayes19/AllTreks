import { RECEIVE_PARK, CLEAR_PARK } from '../actions/park_actions'


const parksReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PARK:
            newState[action.park.id] = action.park;
            return newState
        case CLEAR_PARK: 
            return {};
        default:
            return state;
    }
}

export default parksReducer