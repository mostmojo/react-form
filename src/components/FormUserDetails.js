import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import moduleName from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
	continue = event => {
		event.preventDefault();
		this.props.nextStep();
	}

	render() {
		const { values } = this.props; // this.props.values
		return (
			<div>
				<h1>Test user details</h1>
			</div>
		);
	}
}

export default FormUserDetails;