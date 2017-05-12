import React from 'react';
import { DefaultArtists } from '../default-artists';
import Header from './Header';
import ConcertPlace from './ConcertPlace';
import PerformanceRecords from './PerformanceRecords';

export default class Artist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artists: DefaultArtists
		};
	}

	addArtist() {
		if (this.newArtist.value === '') {
			return;
		}
		const newArtist = {
			id: this.state.artists.length,
			name: this.newArtist.value,
			edit: false,
			concertPlace: 'concert place',
			concertDate: 'concert date'
		};
		const newState = this.state.artists.slice();
		newState.push(newArtist);
		this.setState({artists: newState});
		this.newArtist.value = '';
	}

	editArtist(event) {
		const myArtists = this.state.artists.slice();
		for (let i = 0; i < this.state.artists.length; i++) {
			this.state.artists[i].edit = false;
		}
		const id = +event.target.dataset.id;
		myArtists[id].edit = true;
		this.setState({artists: myArtists});
	}

	deleteArtist(event) {
		const id = +event.target.dataset.id;
		const myArtists = this.state.artists.slice();

		myArtists.splice(id, 1);
		myArtists.map((artist, index)=> {
		myArtists[index].id = index;
	});
		this.setState({artists: myArtists});
	}

	renderArtists(artist) {
		if (artist.edit === true) {
			return ( <div>
					<input type="text" placeholder={artist.name} ref={(input) => this.changes = input} />
					<button onClick={this.saveChange.bind(this, artist.id)}>Save</button>
					</div>
					);
		} else {
			return ( <div>{artist.name}</div> );
		}
	}

	saveChange(id) {
		if (this.changes.value === '') {
			const myArtists = this.state.artists.slice();
			myArtists[id].edit = false;
			this.setState({artists: myArtists});
			return;
		}
		const newArtist = {id: id, name: this.changes.value, edit: false};
		const myArtists = this.state.artists.slice();
		myArtists.splice(id, 1, newArtist);
		this.setState({artists: myArtists});
	}

	render() {
		if (this.props.layout === 'concert-place') {
			return <ConcertPlace artists={this.state.artists} />;
		} else if (this.props.layout === 'performance-records') {
			return <PerformanceRecords artists={this.state.artists} />;
		} else {
			return (
			<div>
				<Header />
				<input type="text" placeholder="Enter new artist..." ref={(input) => this.newArtist = input} />
				<button onClick={this.addArtist.bind(this)}>Add artist</button>
				{this.state.artists.map((artist, index) => <div key={index} >{this.renderArtists(artist)}
					<button data-id={index} onClick={this.editArtist.bind(this)}>Edit</button>
					<button data-id={index} onClick={this.deleteArtist.bind(this)}>Delete</button>
				</div>)}
			</div>
		);
		}
	}
}
