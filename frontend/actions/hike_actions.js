import * as HikeAPIUtil from '../util/hike_api_util'


export const RECEIVE_HIKE = "RECEIVE_HIKE"
export const CLEAR_HIKES = "CLEAR_HIKES"

export const receiveHike = (hike) => {
    return {
        type: RECEIVE_HIKE,
        hike
    }
}

// export const clearHikes = () => {
//     return {
//         type: CLEAR_HIKES,
//     }
// }





export const fetchHike = hikeId => dispatch => {
    return HikeAPIUtil.fetchHike(hikeId)
    .then(hike => dispatch(receiveHike(hike)));
}

// export const clearHikes = () => dispatch => {
//     return dispatch(clearHikes());
// }