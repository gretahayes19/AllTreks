import * as ParkAPIUtil from '../util/park_api_util'

export const RECEIVE_PARK = "RECEIVE_PARK"

export const receivePark = (park) => {
    return {
    type: RECEIVE_PARK,
    park
    }
}


export const fetchPark = parkId => dispatch => {
    return ParkAPIUtil.fetchPark(parkId)
    .then((park) => {
        dispatch(receivePark(park))
    });

}