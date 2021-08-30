import { connect } from "react-redux";
import HikeShow from "./hike_show";
import { fetchHike, clearHikes } from "../../actions/hike_actions";
import {fetchReviews, deleteReview} from '../../actions/review_actions'

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
        fetchReviews: () => dispatch(fetchReviews()),
        clearHikes: () => dispatch(clearHikes()),
        deleteReview: id => dispatch(deleteReview(id))
    }
}

export default connect(mSTP, mDTP)(HikeShow)