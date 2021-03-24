import { connect } from "react-redux";
import ParkShow from "./parks";
import { fetchPark, fetchParkHikes } from "../../actions/park_actions";

const mSTP = (state, ownProps) => {
    
    return {
        park: state.entities.parks[ownProps.match.params.parkId], 
        hikes: Object.values(state.entities.hikes)  
    }

}

const mDTP = (dispatch) => {
    return {
    
        fetchPark: parkId => dispatch(fetchPark(parkId)),
        fetchParkHikes: parkId => dispatch(fetchParkHikes(parkId))
    }
}

export default connect(mSTP, mDTP)(ParkShow)