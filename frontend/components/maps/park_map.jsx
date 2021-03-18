import React from "react"
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JldGFoYXllczE5IiwiYSI6ImNrbWV3bDc0cTJ5dmcyb3cwbWFkOXBxcTgifQ.zJTwMml2eIz5JJnGG284JA'


class ParkMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lng: this.props.park.lng,
            lat: this.props.park.lat,
            zoom: 7.65
        };
        this.mapContainer = React.createRef();
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [lng, lat],
            zoom: zoom
        });


        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }

    render () {

        return (
            <div>

                <div ref={this.mapContainer} className="map-container">

                </div>
            </div >
        )
    }
}


export default ParkMap