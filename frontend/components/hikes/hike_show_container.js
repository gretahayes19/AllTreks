import { connect } from "react-redux";
import HikeShow from "./hike_show";
import { fetchPark, fetchParkHikes } from "../../actions/park_actions";

const mSTP = (state, ownProps) => {

    return {
        hike: state.entities.hikes[ownProps.match.params.hikeId],
        nearbyHikes: Object.values(state.entities.hikes)
    }

}

const mDTP = (dispatch) => {
    // debugger
    return {

        fetchPark: parkId => dispatch(fetchPark(parkId)),
        fetchParkHikes: parkId => dispatch(fetchParkHikes(parkId))
    }
}

export default connect(mSTP, mDTP)(HikeShow)