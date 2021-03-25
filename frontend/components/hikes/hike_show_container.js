import { connect } from "react-redux";
import HikeShow from "./hike_show";
import { fetchHike } from "../../actions/hike_actions";
import {fetchReviews} from '../../actions/review_actions'

const mSTP = (state, ownProps) => {
    return {
        hike: state.entities.hikes[ownProps.match.params.hikeId],
        reviews: state.entities.reviews,
        currentUser: state.entities.users[state.session.currentUserId]
    }
}

const mDTP = (dispatch) => {
    return {
        fetchHike: hikeId => dispatch(fetchHike(hikeId)),
        fetchReviews: () => dispatch(fetchReviews())
    }
}

export default connect(mSTP, mDTP)(HikeShow)