import React, { Component } from 'react';
import { fetchAllBeers } from '../../service/beers-api';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class BeersContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: [

            ],
            //loading: true
        }
    }

    // ComponentDidMount
    componentDidMount() {
        fetchAllBeers('abv_gt').then(res => this.setState({ beers: res.data }))
    }

    // Render > Return
    render() {
        const loading = this.state.loading;
        return (
            <div className='container'>
                <h1 className='title'>'BeersList'</h1>
                <div className="quote">
                    <h4>“Beer, if drunk in moderation, softens the temper, cheers the spirit and promotes health.”</h4>
                    <p>- Thomas Jefferson</p>  
                    <hr/>                  
                </div>
                { this.state.loading ? (<div className='loading'><h3>Loading...</h3></div>) : (                   
                <ul className='beer-list'>
                    <h2>A Spectacular List of Beers</h2>                    
                    { this.state.beers.map( beer => 
                    <li className='beer-item-list' key={beer.id}>
                        <Link to={`/beers/${beer.id}`}>
                            <p>{beer.name}<br/><span>{beer.tagline}</span></p>                                
                        </Link>
                    </li> 
                    )}                                                                                    
                </ul>
                )}
            </div>
        )
    }
}

BeersContainer.propTypes = {
    beers: PropTypes.object
};

export default BeersContainer;