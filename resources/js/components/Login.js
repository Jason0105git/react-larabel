import React, { Component } from 'react';


class Login extends Component {

	constructor(props){
		super(props)
		this.state = {
			email: '',
			password: '',
			loged: false,
		}
		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)
		this.onLoginSubmit = this.onLoginSubmit.bind(this)
	}

	handlePasswordChange(e){}

	handleEmailChange(e){}

	onLoginSubmit(){}

	render(){
		return(
				<h1>Login</h1>
		)
	}
}

export default Login