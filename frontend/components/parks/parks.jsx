import React from 'react'

class ParkShow extends React.Component {
    constructor(props) {
        super(props)
        
    }
    

    componentDidMount() {
        this.props.fetchPark(this.props.match.params.parkId)
        
    }


    render() {
        if (!this.props.park) return null;

        const {park} = this.props 

        return(
            <>
                <div className="park-content-wrap">
                    <section className="park-description">
                        <h1 className="header-text1">Best trails in {park.name}</h1>
                        <p className="about">{park.about}</p>
                        <h2 className="header-text2">Description</h2>
                        <p className="description">{park.description}</p>
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
                </div>
            </>
        )
    }
}

export default ParkShow