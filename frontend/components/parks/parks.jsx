import React from 'react'
import ParkMap from '../maps/park_map'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

class ParkShow extends React.Component {
    constructor(props) {
        super(props)
        
    }
    

    componentDidMount() {
        this.props.fetchPark(this.props.match.params.parkId)
        this.props.fetchParkHikes(this.props.match.params.parkId)
    }


    render() {
        if (!this.props.park) return null;
        if (!this.props.hikes) return null;

        const {park, hikes} = this.props 
        const hikelist = hikes.map(hike => (
            <li key={hike.id}>{hike.name}
                <img src={hike.coverPhotoURL} alt="alt"/>
            </li>
        ))
        return(
            <>
                <div className="park-content-wrap">
                    <section className="park-description">
                        <h1 className="header-text1">Best trails in {park.name}</h1>
                        <p className="about">{park.about}</p>
                        <h2 className="header-text2">Description</h2>
                        <p className="description">{park.description}</p>
                        <ParkMap park={park}/>
                        <div className="park-actions">
                            <div className="park-action">
                                <a href={`https://www.google.com/maps/dir/Current+Location/${park.lat},${park.lng}`} >
                                    <FontAwesomeIcon icon={faRoute} />
                                    <p>Directions</p>
                                </a>
                            </div>
                            <div className="park-action">

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
                    <section className="hike">
                        <ul>{hikelist}</ul>
                    </section>

                </div>
            </>
        )
    }
}

export default ParkShow