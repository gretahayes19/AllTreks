import { connect } from "react-redux";
import EditReviewForm from './edit_review_form';
import { updateReview, fetchReviews  } from '../../actions/review_actions'

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.currentUserId],
    }
}


const mDTP = (dispatch) => ({
    updateReview: review => dispatch(updateReview(review)),
    fetchReviews: () => dispatch(fetchReviews())
})

export default connect(mSTP, mDTP)(EditReviewForm)