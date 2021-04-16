import * as ParkAPIUtil from '../util/park_api_util'

export const RECEIVE_PARK = "RECEIVE_PARK"
export const RECEIVE_PARK_HIKES = "RECEIVE_PARK_HIKES"
export const CLEAR_PARK = "CLEAR PARK"

export const receivePark = (park) => {
    return {
    type: RECEIVE_PARK,
    park
    }
}

export const removePark = () => {
    return {
    type: CLEAR_PARK,
    }
}

export const receiveParkHikes = hikes => {
    return {
        type: RECEIVE_PARK_HIKES,
        hikes
    }
}

export const fetchPark = parkId => dispatch => {
    return ParkAPIUtil.fetchPark(parkId)
    .then((park) => {
        dispatch(receivePark(park))
    });

}

export const fetchParkHikes = parkId => dispatch => {
    return ParkAPIUtil.fetchParkHikes(parkId)
    .then(hikes => dispatch(receiveParkHikes(hikes)));
}

export const clearPark = () => dispatch => {
    return dispatch(removePark());
}