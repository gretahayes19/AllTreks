import { connect } from "react-redux";
import HikeShow from "./hike_show";
import { fetchHike } from "../../actions/hike_actions";
import {fetchPark} from '../../actions/park_actions'

const mSTP = (state, ownProps) => {
    return {
        hike: state.entities.hikes[ownProps.match.params.hikeId],
        currentUser: state.entities.users[state.session.currentUserId]
    }

}

const mDTP = (dispatch) => {
    return {
        fetchHike: hikeId => dispatch(fetchHike(hikeId)),
    }
}

export default connect(mSTP, mDTP)(HikeShow)