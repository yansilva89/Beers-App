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
          <div className='product-details'>
              <p>{beer.name}</p>
              <p>{beer.tagline}</p>
              <p>{beer.first_brewed}</p>
              <p>{beer.description}</p>
              <img src={beer.image_url} alt=""/>
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