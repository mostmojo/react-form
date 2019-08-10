import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Privacy extends Component {
	continue = event => {
		event.preventDefault();
		this.props.nextStep();
	}

	back = event => {
		event.preventDefault();
		this.props.prevStep();
	}

	render() {
		const { privacyValues, handleChange } = this.props; // this.props.values
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Privacy" />
					<TextField
					floatingLabelText="Receive company updates by email"
					onChange={handleChange('updates')}
					defaultValue={privacyValues.updates}
					/>
					<br />
					<TextField
					floatingLabelText="Receive company product news"
					onChange={handleChange('communication')}
					defaultValue={privacyValues.communication}
					/>
					<br />
					<RaisedButton
					label="submit"
					primary={true}
					style={styles.button}
					onClick={this.continue}
					/>
					<RaisedButton
					label="back"
					primary={false} // change color to white
					style={styles.button}
					onClick={this.back}
					/>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

const styles = {
	button: {
		margin: 15
	}
}

export default Privacy;