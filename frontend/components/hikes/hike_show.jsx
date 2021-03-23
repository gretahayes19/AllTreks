import React from 'react'
import ParkMap from '../maps/park_map'
import NearbyHikeIndex from '../hikes/neaby_hike_index'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubNavContainer from '../nav/subnav_container'
import { faRoute, faPrint, faShare, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";


class HikeShow extends React.Component {


    componentDidMount() {
        this.props.fetchHike(this.props.match.params.hikeId);
    }

    render () {
        if (!this.props.hike) return null;

        const {hike} = this.props
        
        const thisHike = hike.thisHike;
        const nearbyHikes = hike.nearbyHikes;
        const reviews = thisHike.reviews

        return (
            <div className="hike-page-background"> 
                <SubNavContainer parkName={thisHike.parkName}/>
                <div className="title-box">
                    <div className="title-photo-box">
                        <img src={hike.thisHike.coverPhotoURL} alt="hike"/>

                    </div>
                    <div className="hike-title-content">
                        <h1 className="header-text1">{thisHike.name}</h1>
                        <span className={`hike-difficulty ${thisHike.difficulty}`}>{thisHike.difficulty}</span>
                        <p>{hike.thisHike.parkName}</p>
                    </div>
                    <div className="hike-actions-wrap">
                            <div className="hike-action">
                                <a href={`https://www.google.com/maps/dir/Current+Location/${thisHike.lat},${thisHike.lng}`} >
                                    <FontAwesomeIcon icon={faRoute} />
                                    <p>Directions</p>
                                </a>
                            </div>
                            <div className="hike-action">
                                <Link to="#">
                                    <FontAwesomeIcon icon={faPrint} />
                                    <p>Print map</p>
                                </Link>
                            </div>
                            <div className="hike-action">
                                <Link to="#">
                                    <FontAwesomeIcon icon={faShare} />
                                    <p>Share</p>
                                </Link>
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
                        <div className="hike-left-4">

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