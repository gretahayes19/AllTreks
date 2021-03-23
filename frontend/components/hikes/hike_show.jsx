import React from 'react'
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

        return (
            <div className="hike-page-background"> 
                <SubNavContainer parkName={hike.thisHike.parkName}/>
                <div className="title-box">
                    <div className="title-photo-box">
                        <img src={hike.thisHike.coverPhotoURL} alt="hike"/>

                    </div>
                    <div className="hike-title-content">
                        <h1 className="header-text1">{hike.thisHike.name}</h1>
                        <span className={`hike-difficulty ${hike.thisHike.difficulty}`}>{hike.thisHike.difficulty}</span>
                        <p>{hike.thisHike.parkName}</p>
                    </div>
                    <div className="hike-actions-wrap">
                            <div className="hike-action">
                                <a href={`https://www.google.com/maps/dir/Current+Location/${hike.thisHike.lat},${hike.thisHike.lng}`} >
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
                            <p>This is a great hike!</p>
                        </div>
                        <div className="hike-left-2">

                        </div>
                        <div className="hike-left-3">

                        </div>
                        <div className="hike-left-4">

                        </div>
                    </div>
                    <div className="hike-right">

                    </div>
                </div>
            </div>
        )
    }
}

export default HikeShow