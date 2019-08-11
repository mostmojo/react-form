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
				<>
					<AppBar title="Enter User Details" />
					<TextField
					required
					hintText="Ex. Jacob Trayson"
					floatingLabelText="Name *"
					onChange={handleChange('name')} // Destructure. No need for this.props.handleChange
					defaultValue={values.name}
					id="name"
            		label="Name"
            		name="name"
					/>
					<br />
					<TextField
					hintText="Ex. Web Developer"
					floatingLabelText="Role"
					onChange={handleChange('role')} // Destructure. No need for this.props.handleChange
					defaultValue={values.role}
					id="role"
            		label="Role"
            		name="role"
            		autoComplete="role"
					/>
					<br />
					<TextField
					required
					hintText="Ex. jacob@trayson.com"
					floatingLabelText="Email *"
					onChange={handleChange('email')} // Destructure. No need for this.props.handleChange
					defaultValue={values.email}
					id="email"
            		label="Email Address"
            		name="email"
            		autoComplete="email"
            		autoFocus
					/>
					<br />
					<TextField
					required
					hintText="•••••••••"
					floatingLabelText="Password *"
					onChange={handleChange('password')} // Destructure. No need for this.props.handleChange
					defaultValue={values.password}
					id="password"
            		label="Password"
					name="password"
					type="password"
            		autoComplete="current-password"
					/>
					<br />
					<RaisedButton
					label="submit"
					primary={true}
					style={styles.button}
					onClick={this.continue}
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