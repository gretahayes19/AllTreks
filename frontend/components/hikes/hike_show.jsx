import React from 'react'
import ParkMap from '../maps/park_map'
import ReviewIndex from '../reviews/reviews_index'
import NearbyHikeIndex from '../hikes/neaby_hike_index'
import ReviewFormContainer from '../reviews/review_form_container'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubNavContainer from '../nav/subnav_container'
import { faRoute, faPrint, faShare, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import ReactStars from "react-rating-stars-component";


class HikeShow extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            reviewForm: false,
            editForm: false,
        }
        this.showReviewForm = this.showReviewForm.bind(this)
        this.showEditForm = this.showEditForm.bind(this)
        this.rerenderParentCallback = this.rerenderParentCallback.bind(this);

        // this.averageReivews = this.averageReivews.bind(this)
    }

    componentDidMount() {
        this.props.clearHikes();
        this.props.fetchReviews();
        this.props.fetchHike(this.props.match.params.hikeId);
    }

    componentDidUpdate() {
        if (!this.props.hike) this.props.fetchHike(this.props.match.params.hikeId);
        // this.props.fetchReviews();

    }

    // componentDidUnmount() {
    //     this.props.clearHikes();
    // }
    
    showReviewForm() {
        this.setState({reviewForm: !this.state.reviewForm})
    }

    showEditForm() {
        this.setState({editForm: !this.state.editForm})
    }

    averageReivews(reviews) {
        let reviewSum = 0;
        reviews.forEach(review => {
            reviewSum += review.rating;
        })
        return reviewSum/reviews.length;
    }

    rerenderParentCallback() {
        this.forceUpdate();
    }
    

    render () {
        
        if (!this.props.hike || !this.props.hike.thisHike) return null;


        const {hike, currentUser, reviews, deleteReview, updateReview} = this.props
        



        const thisHike = hike.thisHike;
        const nearbyHikes = hike.nearbyHikes;
        const sortedReviews = reviews.slice().filter(review => review.hike_id === thisHike.id).reverse()
        const numReviews = sortedReviews.length


        const avgRating = this.averageReivews(sortedReviews);

        const starOps = {
            size: 18,
            isHalf: true,
            edit: false,
            value: avgRating,
        };

        const writeReview = (currentUser ? (
            <div>
            <span className="write-review-button" onClick={this.showReviewForm}>Write review</span>
                {this.state.reviewForm ? (<ReviewFormContainer hideReviewForm={this.showReviewForm} hikeId={thisHike.id} />) : null }
            </div>
         ) : null)

        return (
            <div className="hike-page-background"> 
                <SubNavContainer parkId={thisHike.park_id} parkName={thisHike.parkName}/>
                <div className="title-box">
                    <div className="title-photo-box">
                        <img src={hike.thisHike.coverPhotoURL} alt="hike"/>

                    </div>
                    <div className="hike-title-content">
                        <h1 className="header-text1">{thisHike.name}</h1>
                        <div className="difficulty-rating">
                            <span className={`hike-difficulty ${thisHike.difficulty}`}>{thisHike.difficulty}</span>
                            <ReactStars {...starOps} />
                            <p>({sortedReviews.length})</p>
                        </div>        
                        <p>{hike.thisHike.parkName}</p>
                    </div>
                    <div className="hike-actions-wrap">
                            <div className="hike-action">
                                <a target="_blank" href={`https://www.google.com/maps/dir/Current+Location/${thisHike.lat},${thisHike.lng}`} >
                                    <FontAwesomeIcon icon={faRoute} />
                                    <p>Directions</p>
                                </a>
                            </div>
                            <div className="hike-action">
                            <a href="javascript:window.print();">
                                    <FontAwesomeIcon icon={faPrint} />
                                    <p>Print map</p>
                                </a>
                            </div>
                            <div className="hike-action">
                            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=all-treks.herokuapp.com">
                                    <FontAwesomeIcon icon={faShare} />
                                    <p>Share</p>
                                </a>
                            </div>
                    </div>
                </div>
                <div className="hike-info">
                    <div className="hike-left">
                        <div className="hike-left-1">
                            <p>{thisHike.summary}</p>
                        </div>
                        <div className="hike-left-2">
                            <div className="hike-stat">
                                <p>Length</p>
                                <span className="header-text-3">{thisHike.distance} mi</span>
                            </div>
                            <div className="hike-stat">
                                <p>Elevation gain</p>
                                <span className="header-text-3">{thisHike.elevation} ft</span>
                            </div>
                            <div className="hike-stat">
                                <p>Route type</p>
                                <span className="header-text-3">{thisHike.route_type}</span>
                            </div>
                        </div>
                        <div className="hike-tab">
                            <p>Description</p>
                        </div>
                        <div className="hike-left-3">
                            <div>
                                <p>{thisHike.summary}</p>
                            </div>
                        </div>
                        <div className="hike-tab">
                            <p>{`Reviews (${numReviews})`}</p>
                        </div>
                        {writeReview}
                        <div className="hike-left-4">
                            <ReviewIndex editForm={this.state.editForm} 
                                showEditForm={this.showEditForm} 
                                deleteReview={deleteReview} 
                                currentUser={currentUser} 
                                updateReview={updateReview}
                                hideEditForm={this.showEditForm}
                                rerenderParentCallback={this.rerenderParentCallback}
                                reviews={sortedReviews}/>
                        </div>
                    </div>
                    <div className="hike-right">
                        <div className="hike-map">
                            <ParkMap parent="hike" location={thisHike} />
                        </div>
                        <div className="nearby-hikes-wrapper">
                            <h3 className="nearby-trails header-text3">Nearby Trails</h3>
                            <NearbyHikeIndex hikes={nearbyHikes} park={thisHike.parkName}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HikeShow