// Register.js
import React, { Component } from 'react'
import axios from 'axios'

class Register extends Component {
	constructor(props){
		super(props)
		this.state = {
				firstname: 'user',
				email: 'user@mail.com',
				password: '123456',
		
		}

		this.handleSubmitForm = this.handleSubmitForm.bind(this)
		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)
		this.handleNameChange = this.handlePasswordChange.bind(this)
	}



	handleEmailChange(e){
		this.setState({email: e.currentTarget.value})
	}

	handlePasswordChange(e){
		this.setState({password: e.currentTarget.value})
	}

	handleSubmitForm(e){

		// TODO: validate passwords

		e.preventDefault()
		console.log(this.state)

		axios.post('/api/register', this.state)
          .then(response => {
            // redirect to the homepage
            history.push('/')
          })
          .catch(error => {
            this.setState({
              errors: error.response.data.errors
            })
          })
    }

	

	render(){

		return(
			<form className="col-sm-3  dev-block" onSubmit={this.handleSubmitForm}>
				<div className="form-header"><h4>регистрация</h4> my@email.com</div>
			  <div className="form-group">
			    <label htmlFor="email">Email address:</label>
			    <input type="email" className="form-control" id="email"  onChange={this.handleEmailChange} />
			  </div>
			  <div className="form-group">
			    <label htmlFor="pwd">Password:</label>
			    <input type="password" className="form-control" id="pwd"  onChange={this.handlePasswordChange} />
			  </div>
			  <button type="submit" className="btn btn-primary">Submit</button>
			</form>
		)
	}

}

export default Register