import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Admin from './components/Admin';

import ConcertPlace from './components/ConcertPlace';
import PerformanceRecords from './components/PerformanceRecords';

const app = document.getElementById('app');

ReactDOM.render(
	  <Router history={browserHistory}>
        <Route path="/" component={Admin}/>
        <Route path="/concert-place" component={Admin}/>
		<Route path="/performance-records" component={Admin}/>
      </Router>,
app);
