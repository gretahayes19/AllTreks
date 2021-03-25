import React from 'react'



class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.initialState;

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        this.props.createReview(this.state);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }


    render () {
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit} className="review-form">
                        <p>Rating</p>
                        <div className="rating-select" onChange={this.update("rating")}>
                            <label className="review-star">★
                            <input type="radio" name="rating" value="5" />
                            </label>

                            <label className="review-star">★
                            <input type="radio" name="rating" value="4" />
                            </label>

                            <label className="review-star">★
                            <input type="radio" name="rating" value="3" />
                            </label>

                            <label className="review-star">★
                            <input type="radio" name="rating" value="2" />
                            </label>

                            <label className="review-star">★
                            <input type="radio" name="rating" value="1" required />
                            </label>
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
                        <button className="write-review-button">Submit Review</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ReviewForm