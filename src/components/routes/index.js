import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import BeersContainer from '../sub-components/BeersContainer';
import BeersDetails from '../sub-components/BeersDetails';

export default () => (
    <BrowserRouter>
        <Route path='/' exact component={BeersContainer}/>  
        <Route path='/details' exact component={BeersDetails}/>
    </BrowserRouter>
);

