import React from 'react';
import Header from './Header';

export default class PerformanceRecords extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artists: this.props.artists
		};
	}

	render() {
		return (
				<div>
					<Header />
					{this.state.artists.map((artist, index) => <div key={index}>
						{artist.id+1}. {artist.name}
						<br />
						{artist.concertPlace}
						<br />
						{artist.concertDate}
						<hr />
					</div>)}
				</div>
			);
	}
}
