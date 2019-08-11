import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';


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
		return (
			<MuiThemeProvider>
				<>
					<AppBar title="Privacy" />
					<FormControl component="fieldset">
						<FormGroup>
							<br />
							<FormControlLabel
								control={ <Checkbox /> }
								label="Receive company updates by email about various news and events"
								style={styles.mb}
							/>
							<FormControlLabel
								control={ <Checkbox /> }
								label="Receive communication by email for other products created by the team"
								style={styles.mb}
							/>
						</FormGroup>
					</FormControl>
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
				</>
			</MuiThemeProvider>
		);
	}
}

const styles = {
	button: {
		margin: 15
	},
	mb: {
		marginBottom: 12
	}
}

export default Privacy;