import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';

export class UserForm extends Component {
	state = {
		step: 1,
		name: '',
		role: '',
		email: '',
		password: ''
	}

	// Proceed to the next step
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1
		});
	}

	// Go back to the previous step
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1
		});
	}

	// Handle all the field changes

	handleChange = input => event => {
		this.setState({[input]: event.target.value});
	}


	render() {
		const { step } = this.state;
		const { name, role, email, password } = this.state;
		const values = { name, role, email, password }

		switch(step) {
			case 1:
				return (
					<FormUserDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
				)
			case 2:
				return <h1>FormPersonalDetails</h1>
			case 3:
				return <h1>Confirm</h1>
			case 3:
				return <h1>Successful</h1>
		}
	}
}

export default UserForm