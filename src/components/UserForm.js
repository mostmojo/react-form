import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import Privacy from './Privacy';
import Confirm from './Confirm';
import Done from './Done';

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
				return (
					<Privacy nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} />
				)
			case 3:
				return (
					<Confirm nextStep={this.nextStep} prevStep={this.prevStep} values={values} />
				)
			case 4:
				return <Done />;

			default: // do nothing
		}
	}
}

export default UserForm