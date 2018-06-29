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
        fetchAllBeers('abv_gt').then(res => window.console.log(res.data))
    }

    // Render > Return
    render() {
        return (
            <h1>Beers Container</h1>
        )
    }
}

export default BeersContainer;