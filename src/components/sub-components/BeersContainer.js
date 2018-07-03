import React, { Component } from 'react';
import { fetchAllBeers } from '../../service/beers-api';

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
                <ul>
                    {this.state.beers.map( beer => (
                        <li key={beer.id}>{ beer.name }</li>
                    ))}                    
                </ul>
            </div>
        )
    }
}

export default BeersContainer;