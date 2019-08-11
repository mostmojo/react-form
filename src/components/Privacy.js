import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FormControlLabel from '@material-ui/core/Checkbox';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';


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
				<React.Fragment>
					<AppBar title="Privacy" />
					<FormControl component="fieldset">
						<FormGroup>
							<FormControlLabel
								control={ <Checkbox /> }
								label="Receive company updates by email about various news and events"
							/>
							<FormHelperText>Receive company updates by email about various news and events</FormHelperText>
							<br />
							<FormControlLabel
								control={ <Checkbox /> }
								label="Receive communication by email for other products created by the team"
							/>
							<FormHelperText>Receive communication by email for other products created by the team</FormHelperText>
							<br />
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