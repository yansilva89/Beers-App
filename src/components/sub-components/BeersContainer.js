import React, { Component } from 'react';
import { fetchAllBeers } from '../../service/beers-api';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class BeersContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: [

            ]
        }
    }

    // ComponentDidMount
    componentDidMount() {
        fetchAllBeers('abv_gt').then(res => this.setState({ beers: res.data }))
    }

    // Render > Return
    render() {
        return (
            <div>
                <h1>Beers List</h1>
                <ul className='beer-list'>
                    {this.state.beers.map( beer => 
                        <li className='beer-item-list' key={beer.id}>
                            <Link to={`/beers/${beer.id}`}>
                                <p>{beer.name}<br/><span>{beer.tagline}</span></p>                                
                            </Link>
                        </li>
                    )}                    
                </ul>
            </div>
        )
    }
}

BeersContainer.propTypes = {
    beers: PropTypes.object
};

export default BeersContainer;