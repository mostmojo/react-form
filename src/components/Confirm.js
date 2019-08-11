import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
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
		const { values: { name, role, email } } = this.props; // this.props.values
		return (
			<MuiThemeProvider>
				<>
					<AppBar title="Confirm" />
					<List>
						<ListItem
							primaryText="Name"
							secondaryText={name}
						/>
						<ListItem
							primaryText="Role"
							secondaryText={role}
						/>
						<ListItem
							primaryText="Email"
							secondaryText={email}
						/>
					</List>
					<br />
					<RaisedButton
					label="Confirm & Continue"
					primary={true}
					style={styles.button}
					onClick={this.continue}
					/>
					<RaisedButton
					label="back"
					primary={false}
					style={styles.button}
					onClick={this.back}
					/>
				</>
			</MuiThemeProvider>
		);
	}
}

const styles = {
	button: {
		margin: 15
	}
}

export default FormUserDetails;