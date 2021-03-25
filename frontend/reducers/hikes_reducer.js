import { RECEIVE_PARK_HIKES } from '../actions/park_actions'
import { RECEIVE_HIKE, CLEAR_HIKES } from '../actions/hike_actions'

const hikesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PARK_HIKES:
            action.hikes.forEach(hike => (
                newState[hike.id] = hike
            ))
            return newState
        case RECEIVE_HIKE:
            newState[action.hike.thisHike.id] = action.hike
            return newState
        // case CLEAR_HIKES:
        //     return {};
        default:
            return state;
    }
}

export default hikesReducer