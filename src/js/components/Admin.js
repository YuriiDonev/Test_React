import React from 'react';
import { Link } from 'react-router';
import { DefaultAdmin } from '../default-artists';
import Artist from './Artist';

export default class Admin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			admin: DefaultAdmin
		};
	}

	checkIsAdmin(props) {
		if (this.props.route.path === '/') {
			return <div>{this.renderForm()}</div>;
		} else if (this.props.route.path === '/concert-place') {
			if (!this.state.admin.isAdmin) {
				return <div>{this.renderForm()}</div>;
			} else {
				return <Artist layout="concert-place" />;
			}
		} else if (this.props.route.path === '/performance-records') {
			if (!this.state.admin.isAdmin) {
				return <div>{this.renderForm()}</div>;
			} else {
				return <Artist layout="performance-records" />;
			}
		}
	}

	checkData() {
		const username = this.admin.value;
		const password = this.password.value;

		if (this.state.admin.username !== username && this.state.admin.password !== password) {
			const newAdmin = {};
			for (let key in this.state.admin) {
			  newAdmin[key] = this.state.admin[key];
			}
			newAdmin.message = 'Check your username and password please';
			newAdmin.isAdmin = false;
			this.setState({admin: newAdmin});
			return;
		}
		if (this.state.admin.username !== username) {
			const newAdmin = {};
			for (let key in this.state.admin) {
			  newAdmin[key] = this.state.admin[key];
			}
			newAdmin.message = 'Check your username please';
			newAdmin.isAdmin = false;
			this.setState({admin: newAdmin});
			return;
		}
		if (this.state.admin.password !== password) {
			const newAdmin = {};
			for (let key in this.state.admin) {
			  newAdmin[key] = this.state.admin[key];
			}
			newAdmin.message = 'Check your password please';
			newAdmin.isAdmin = false;
			this.setState({admin: newAdmin});
			return;
		}
		const newAdmin = {};
		for (let key in this.state.admin) {
		  newAdmin[key] = this.state.admin[key];
		}
		newAdmin.message = 'Success!';
		newAdmin.isAdmin = true;
		this.setState({admin: newAdmin});
	}

	renderForm() {
		if (!this.state.admin.isAdmin) {
			return (
				<div admin={this.state.admin}>
					<div>Are you Admin?</div>
				<hr/>
					<div>Log in:</div>
					<input type="text" placeholder="Username..." ref={(input) => this.admin = input} />
					<div>Password:</div>
					<input type="text" placeholder="Password..." ref={(input) => this.password = input} />
					<button onClick={this.checkData.bind(this)}>LogIn</button>
				<hr/>
					<div>{this.state.admin.message}</div>
				</div>
			);
		} else {
			return <Artist admin={this.state.admin} />;
		}
	}

	render() {
		return <div>{this.checkIsAdmin()}</div>
	}
}
