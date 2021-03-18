import { RECEIVE_PARK_HIKES } from '../actions/park_actions'


const hikesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PARK_HIKES:
            action.hikes.forEach(hike => (
                newState[hike.id] = hike
            ))
            return newState
        default:
            return state;
    }
}

export default hikesReducer