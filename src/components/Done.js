import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Done extends Component {
	continue = event => {
		event.preventDefault();
		// Process form (Send data to API - express, flask, php in the backend)
		this.props.nextStep();
	}

	back = event => {
		event.preventDefault();
		this.props.prevStep();
	}

	render() {
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Done" />
					<h1><span role="img" aria-label="checkbox">✔</span> Please verify your email address.</h1>
					<p>You should have received an email from us already! <span role="img" aria-label="party-emoji">🎉</span></p>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

export default Done;
