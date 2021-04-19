import { connect } from "react-redux";
import ParkShow from "./parks";
import { fetchPark, fetchParkHikes, clearPark } from "../../actions/park_actions";
import {clearHikes} from '../../actions/hike_actions'

const mSTP = (state, ownProps) => {
    
    return {
        parks: state.entities.parks,
        park: state.entities.parks[ownProps.match.params.parkId], 
        hikes: Object.values(state.entities.hikes)  
    }

}

const mDTP = (dispatch) => {
    return {
        clearPark: () => dispatch(clearPark()),
        clearHikes: () => dispatch(clearHikes()),
        fetchPark: parkId => dispatch(fetchPark(parkId)),
        fetchParkHikes: parkId => dispatch(fetchParkHikes(parkId))
    }
}

export default connect(mSTP, mDTP)(ParkShow)