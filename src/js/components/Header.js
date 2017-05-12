import React from 'react';
import { Link } from 'react-router';

export default function Header() {
	return (
		<div className="Header">
			<Link to={'/'} ><h5>Artists</h5> </Link>
			<Link to={'/concert-place'} ><h5>Concert place</h5> </Link>
			<Link to={'/performance-records'} ><h5>Performance records</h5> </Link>
			<hr/>
		</div>
	);
}
