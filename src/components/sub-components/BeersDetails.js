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
      const beer = this.state.beer   
      return (
        <div className='product-details'>
            <p>{beer[0].name}</p>
            <p>{beer[0].tagline}</p>
            <p>{beer[0].first_brewed}</p>
            <p>{beer[0].description}</p>
            <img src={beer[0].image_url} alt=""/>
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