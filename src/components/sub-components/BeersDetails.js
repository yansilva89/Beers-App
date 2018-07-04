import React from 'react';
import PropTypes from 'prop-types';
import { fetchSingleBeer } from '../../service/single-beer';

class BeersDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            beer: [

            ]
        }
    }

    //
    componentDidMount() {        
        fetchSingleBeer(`${this.props.match.params.id}`).then(res => (
            this.setState({
                beer: res.data
            })
        ))
    }

    //
    render() {
        const beer = this.state.beer[0] || ''
        return (
          <div className='container'>
              <div className="product-details">
                <h1>{beer.name}</h1>
                <h4>{beer.tagline}</h4>
                <h5>{beer.first_brewed}</h5>
                <p>{beer.description}</p>
                <div className="beer-img">
                    <img src={beer.image_url} alt=""/>
                </div>
              </div>
          </div>
        )
    }
}

BeersDetails.propTypes = {
    name: PropTypes.string,
    tagline: PropTypes.string,
    first_brewed: PropTypes.string,
    description: PropTypes.string,
    image_url: PropTypes.string,
};

export default BeersDetails;