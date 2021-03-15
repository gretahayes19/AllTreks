import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions'

const initialState = () => ({
    currentUserId: null
})


const SessionReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState = Object.assign()
}