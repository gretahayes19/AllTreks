import { connect } from "react-redux";
import EditReviewForm from './edit_review_form';
import { updateReview } from '../../actions/review_actions'

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.currentUserId],
    }
}


const mDTP = (dispatch) => ({
    updateReview: review => dispatch(updateReview(review)),
})

export default connect(mSTP, mDTP)(EditReviewForm)