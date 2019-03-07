import React, { Component } from 'react';
import Login from '../../components/Login';
import Register from '../../components/Register';

class AuthContainer extends Component{

	constructor(){
		super();

		this.state ={
			login:{
				email: '',
				password: '',
				successful: false,
				errorMsg: ''
			},

			register:{
				username: '',
				password: '',
				verify_password: '',
				email: '',
				successful: false,
				errorMsg: ''
			},

			loginButton: true
		}
	}


	handleLoginChange = (e) =>{
		const updatedChange = {
			...this.state.login
		}
		updatedChange[e.target.name] = e.target.value;

		this.setState({
			login: updatedChange
		});

		console.log("State from handleLoginChange: ", this.state);
	}

	handleLoginSubmit = (e) =>{
		e.preventDefault();
		const updatedLogin = {
			...this.state.login //spreads current value of login into updatedLogin
		}

		console.log("State from handleLoginSubmit: ", this.state);
	}


	// Need to clear off the state whenenver there is a change in the view
	triggerLoginView = ()=>{
		const resetRegister = {
			...this.state.register
		}

		console.log("ResetRegister from triggerLoginView: ", resetRegister);
		resetRegister.username =  '';
		resetRegister.email =  '';
		resetRegister.password = '';
		resetRegister.verify_password =  '';

		// console.log("After reset: ", resetLogin);

		this.setState({
			register: resetRegister,
			loginButton: true
		});

		console.log("State from triggerRegisterView: ", this.state);
	}

	handleRegisterChange = (e) => {
		const updatedChange = {
			...this.state.register
		}
		updatedChange[e.target.name] = e.target.value;

		this.setState({
			register: updatedChange
		});

		console.log("State from handleRegisterChange: ", this.state)
	}

	handleRegisterSubmit = (e) =>{
		e.preventDefault();
		const updatedRegister = {
			...this.state.register //spreads current value of login into updatedLogin
		}

		console.log("State from handleRegisterSubmit: ", this.state);
	}


	// Need to clear off the state whenenver there is a change in the view
	triggerRegisterView = ()=>{
		const resetLogin = {
			...this.state.login
		}

		console.log("ResetLogin from triggerRegisterView: ", resetLogin);
		resetLogin.email =  '';
		resetLogin.password = '';
		// console.log("After reset: ", resetLogin);

		this.setState({
			login: resetLogin,
			loginButton: false
		});

		console.log("State from triggerRegisterView: ", this.state);
	}

	render(){
		console.log("State from render: ", this.state);
		return(
			<div>
				{this.state.loginButton ? <Login handleLoginChange={this.handleLoginChange} handleLoginSubmit={this.handleLoginSubmit} triggerRegisterView={this.triggerRegisterView}/>
					:
					<Register handleRegisterChange={this.handleRegisterChange} handleRegisterSubmit={this.handleRegisterSubmit} triggerLoginView={this.triggerLoginView}/>
				} 
			</div>
		);
	}
}

export default AuthContainer;