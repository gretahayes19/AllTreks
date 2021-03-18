import { connect } from "react-redux";
import ParkShow from "./parks";
import { fetchPark } from "../../actions/park_actions";

const mSTP = (state, ownProps) => {
    
    return {
        park: state.entities.parks[ownProps.match.params.parkId],    
    }

}

const mDTP = (dispatch) => {
    // debugger
    return {
    
        fetchPark: parkId => dispatch(fetchPark(parkId))
    }
}

export default connect(mSTP, mDTP)(ParkShow)