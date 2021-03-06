import React from "react"
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JldGFoYXllczE5IiwiYSI6ImNrbWV3bDc0cTJ5dmcyb3cwbWFkOXBxcTgifQ.zJTwMml2eIz5JJnGG284JA'


class ParkMap extends React.Component {

    constructor(props) {
        super(props);
        let zoom = (this.props.parent === "park") ? 7.65 : 14
        this.state = {
            lng: this.props.location.lng,
            lat: this.props.location.lat,
            zoom: zoom
        };
        this.mapContainer = React.createRef();
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [lng, lat],
            zoom: zoom
        });


        // // add markers to map
            // create a HTML element for each feature
            var el = document.createElement('div');
            el.className = 'marker';

            // make a marker for each feature and add to the map
            new mapboxgl.Marker(el)
                .setLngLat([lng, lat])
                .addTo(this.map);
        // });

        this.map.on('move', () => {
            this.setState({
                lng: this.map.getCenter().lng.toFixed(4),
                lat: this.map.getCenter().lat.toFixed(4),
                zoom: this.map.getZoom().toFixed(2)
            });
        });
    }

    render () {

        let thisClass = (this.props.parent === "park") ? "park-map-container" : "hike-map-container";
        
        return (
            <>
                <div ref={this.mapContainer} className={thisClass}>

                </div>
            </>
        )
    }
}


export default ParkMap