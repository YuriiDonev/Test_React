import React from 'react';
import Header from './Header';

export default class ConcertPlace extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artists: this.props.artists
		};
	}

	readInput(event) {
		const current = event.target;
			if (current.tagName !== 'BUTTON') {
			return;
			} else {
				const id = +event.currentTarget.dataset.id;
				const place = document.getElementById(id+'place');
				const date = document.getElementById(id+'date');
				const newState = this.state.artists.slice();
				newState[id].concertPlace = place.value;
				newState[id].concertDate = date.value;
				this.setState({artists: newState});
				place.value = '';
				date.value = '';
			}
	}

	render() {
		return (
				<div>
					<Header />
					{this.state.artists.map((artist, index) => <div key={index} data-id={index}
					onClick={this.readInput.bind(this)}>{artist.id+1}. {artist.name}
						<br />
					Enter the concert place:
						<br />
					<input id={index+'place'} type="text" placeholder={artist.concertPlace+"..."}/>
						<br />
					Choose the concert date:
						<br />
					<input id={index+'date'} type="text" placeholder={artist.concertDate+"..."}/>
						<br />
					<button>Save</button>
						<hr/>
					</div>)}
				</div>
			);
	}
}
