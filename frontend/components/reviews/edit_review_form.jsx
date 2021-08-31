import React from 'react'
import ReactStars from "react-rating-stars-component";



class EditReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.initialState;

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateReview(this.state).then(this.props.hideEditForm)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }


    render() {

        const starOps = {
            size: 30,
            value: this.state.rating,
            isHalf: false,
            onChange: (newValue) => {
                this.setState({ rating: newValue });
            },
        };

        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit} className="review-form">
                        <p>Rating</p>

                        <div className="rating-select">
                            <ReactStars {...starOps} />
                        </div>
                        <p>Date</p>
                        <input
                            type="date"
                            className="text-input"
                            placeholder="Activity Date"
                            value={this.state.activity_date}
                            onChange={this.update("activity_date")}
                            required />
                        <p>Review</p>
                        <textarea
                            className="text-input review-text"
                            placeholder="Share your thoughts about the trail so others know what to expect"
                            value={this.state.review_text}
                            onChange={this.update("review_text")}
                            required />
                        <button className="write-review-button">Update Review</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default EditReviewForm