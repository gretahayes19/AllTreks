import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import parksReducer from './parks_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    parks: parksReducer
});

export default entitiesReducer;