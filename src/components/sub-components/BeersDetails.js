import React from 'react';
import PropTypes from 'prop-types';

class BeersDetails extends React.Component {
    render() {
      const beer = this.props.beers
      return (
        <div className='product-details'>
          <p>{ beer.name }</p>
          <p>{ beer.tagline }</p>
          <p>{ beer.first_brewed }</p>
          <p>{ beer.description }</p>
          <img src={ beer.image } alt=""/>
        </div>
      )
    }
}

BeersDetails.propTypes = {
    name: PropTypes.string,
    tagline: PropTypes.string,
    first_brewed: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
};

export default BeersDetails;