import React from 'react'
import ParkMap from '../maps/park_map'
import HikeIndex from '../hikes/hike_index'
import SubNavContainer from '../nav/subnav_container'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute, faPrint, faShare, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import ReactStars from "react-rating-stars-component";

import { Link } from 'react-router-dom';

class ParkShow extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            imgIdx: 0,
            currentOffset: 0
        }

        this.carouselNav = this.carouselNav.bind(this)
    }
    

    componentDidMount() {
        this.props.clearHikes();
        this.props.clearPark();
        this.props.fetchPark(this.props.match.params.parkId);
        this.props.fetchParkHikes(this.props.match.params.parkId);
    }


    componentWillUnmount() {
        this.props.clearPark();
    }

    // componentDidUpdate() {
    //     // debugger
    //     if(this.props.park && (this.props.park.id !== this.props.match.params.parkId)) {
    //         // this.props.clearPark();
    //         this.props.fetchPark(this.props.match.params.parkId);
    //     }
    // }

    carouselNav(e) {
        e.preventDefault();
        const direction = parseInt(e.currentTarget.name);
        const newImgIdx = this.state.imgIdx += direction;

        const newOffset = this.state.currentOffset += (direction * -313);
        const imgs = document.querySelectorAll(".carousel-item");
        for (let i = 0; i < imgs.length; i++) {
            const img = imgs[i];
            img.style.transform = `translateX(${newOffset}px)`;
        }

        this.setState({
            currentOffset: newOffset,
            imgIdx: newImgIdx
        })
    }

    averageRating(hikes) {
        let avg = 0;
        hikes.forEach(hike => {
            avg += parseFloat(hike.avg_rating);
        })
        let result = avg / hikes.length
        return result;
    }

    numRatings(hikes) {
        let num = 0;
        hikes.forEach(hike => {
            num += hike.num_reviews;
        })

        return num;
    }

    render() {

        if (!this.props.park) return null;

        if (!this.props.hikes) return null;

        const {park, hikes} = this.props 


        const photoCarousel = hikes.map((hike, idx) => (
            <img className="carousel-item" key={idx} src={hike.coverPhotoURL} alt={hike.name}/>
        ))

        const parkRating = this.averageRating(hikes);
        const numParkReview = this.numRatings(hikes);
        const starOps = {
            size: 18,
            isHalf: true,
            edit: false,
            value: parkRating,
        };



        const carouselButtons = (
            <>
           {this.state.imgIdx > 0 ? ( 
                    <button
                        className="photo-nav-button left"
                        name="-1"
                        onClick={this.carouselNav}>                        
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                 ) : null} 
            {this.state.imgIdx <= hikes.length - 4 ? ( 
                    <button
                        className="photo-nav-button right"
                        name="1"
                        onClick={this.carouselNav}>
                    <FontAwesomeIcon icon={faChevronRight} />
                    </button>
               ) : null}
            </>
        )

        return(
            <>
                <SubNavContainer parkId={park.id} parkName={park.name}/>
                <div className="park-content-wrap">
                    <div className="carousel-wrap">
                        <div className="photo-carousel">
                            {photoCarousel}
                        </div>
                        {carouselButtons}
                    </div>
                    <section className="park-description">
                        <h1 className="header-text1">Best trails in {park.name}</h1>
                        {(numParkReview && parkRating) ? (
                            <div className="park-rating">
                                <ReactStars {...starOps} />
                                <p>{numParkReview} Reviews</p>
                            </div>
                        ) : null }
                        <p className="about">{park.about}</p>
                        <h2 className="header-text2">Description</h2>
                        <p className="description">{park.description}</p>
                        <ParkMap parent="park" location={park}/>
                        <div className="park-actions">
                            <div className="park-action">
                                <a target="_blank" href={`https://www.google.com/maps/dir/Current+Location/${park.lat},${park.lng}`} >
                                    <FontAwesomeIcon icon={faRoute} />
                                    <p>Directions</p>
                                </a>
                            </div>
                            <div className="park-action">
                                <a href="javascript:window.print();">
                                    <FontAwesomeIcon icon={faPrint} />
                                    <p>Print map</p>
                                </a>
                            </div>
                            <div className="park-action">
                                <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=all-treks.herokuapp.com">
                                    <FontAwesomeIcon icon={faShare} />
                                    <p>Share</p>
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className="park-info">
                        <h2 className="header-text-park-info">Park Information</h2>
                        <div className="park-info-details">
                            <article>
                                <h3 className="header-text3">Acreage:</h3>
                                <p>{park.acreage} acres</p>
                            </article>
                            <article>
                                <h3 className="header-text3">Contact</h3>
                                <p>{park.contact}</p>
                            </article>
                        </div>
                    </section>
                    <section className="hike-index-container">
                        <h2 className="header-text-park-info">Top Trails ({hikes.length})</h2>
                        <HikeIndex hikes={hikes} park={park.name}/>
                    </section>

                </div>
            </>
        )
    }
}

export default ParkShow