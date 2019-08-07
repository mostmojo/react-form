import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
	continue = event => {
		event.preventDefault();
		this.props.nextStep();
	}

	render() {
		const { values, handleChange } = this.props; // this.props.values
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Enter User Details" />
					<TextField
					hintText="Ex. Jacob Trayson"
					floatingLabelText="Name"
					onChange={handleChange('name')} // Destructure. No need for this.props.handleChange
					defaultValue={values.name}
					/>
					<br />
					<TextField
					hintText="Ex. Web Developer"
					floatingLabelText="Role"
					onChange={handleChange('role')} // Destructure. No need for this.props.handleChange
					defaultValue={values.role}
					/>
					<br />
					<TextField
					hintText="Ex. jacob@trayson.com"
					floatingLabelText="Email"
					onChange={handleChange('email')} // Destructure. No need for this.props.handleChange
					defaultValue={values.email}
					/>
					<br />
					<TextField
					hintText="•••••••••"
					floatingLabelText="Password"
					onChange={handleChange('password')} // Destructure. No need for this.props.handleChange
					defaultValue={values.password}
					/>
					<br />
					<RaisedButton
					label="submit"
					primary={true}
					style={styles.button}
					onClick={this.continue}
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

export default FormUserDetails;