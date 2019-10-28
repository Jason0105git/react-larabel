// Register.js
import React, { Component } from 'react'
import axios from 'axios'
import {validateNewPassword} from '../utils'

class Register extends Component {
	constructor(props){
		super(props)
		this.state = {
			user: {
				firstname: '',
				lastname: '',
				email: '',
				password: '',
				phone: '',
			},
			errors: '',
			result: '',
			retupePassword: '',
			requested: false,
		
		}

		this.handleSubmitForm = this.handleSubmitForm.bind(this)
		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)
		this.handleNameChange = this.handlePasswordChange.bind(this)
		this.handleLastNameChange = this.handleLastNameChange.bind(this)
		this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
		this.handleRetupePasswordChange = this.handleRetupePasswordChange.bind(this)
		this.handlePhoneChange = this.handlePhoneChange.bind(this)
	
	}


	handleLastNameChange(e){
		const user = this.state.user
		user.lastname = e.currentTarget.value
		this.setState({user:user})
	}
	
	handleFirstNameChange(e){
		const user = this.state.user
		user.firstname = e.currentTarget.value
		this.setState({user:user})
	}

	handleRetupePasswordChange(e){
		this.setState({retupePassword: e.currentTarget.value})
	}



	handleEmailChange(e){
		const user = this.state.user
		user.email = e.currentTarget.value
		this.setState({user: user})
	}

	handlePasswordChange(e){
  	const user = this.state.user
  	user.password = e.currentTarget.value
		this.setState({user: user})
	}

	handlePhoneChange(e){
  	const user = this.state.user
  	user.phone = e.currentTarget.value
		this.setState({user: user})
	}


	handleSubmitForm(e){

		e.preventDefault()
		const validPassword = validateNewPassword(this.state.user.password, this.state.retupePassword)
		
		if(validPassword.validate){
			this.setState({requested: true})
			axios.post('/api/register', this.state.user)
	          .then(response => {
	            console.log(response.data)
	            this.setState({result:response.data, requested: false})
	          })
	          .catch(error => {
	    					this.setState({result:'внутренняя ошибка, попробуйте позже'})      		
	          })
		} else {
			this.setState({result: validPassword.message})	
		}
  }

	render(){

		return(
			<form className="col-sm-4  dev-block" onSubmit={this.handleSubmitForm}>
				<h4>регистрация</h4>
	
				<div className="form-group">
       		<label htmlFor="firstname">имя</label>
					<input id="firstname" type="text" className="form-control" required onChange={this.handleFirstNameChange} />	
				</div>

				<div className="form-group">
       		<label htmlFor="lastname">фамилия</label>
       		<input id="lastname" type="text" className="form-control" required onChange={this.handleLastNameChange} />	
				</div>

				

				<div className="form-group">
     			<label htmlFor="phone">телефон</label>
      		<input id="phone" type="tel" className="form-control" required pattern="['+']{1}[7]{1}[9]{1}[0-9]{10}" placeholder={'+790000000000'} onChange={this.handlePhoneChange}/>
      	</div>

			  <div className="form-group">
			  	<label htmlFor="email">email</label>
    		  <input id="email" type="email" className="form-control"  onChange={this.handleEmailChange} />
			  </div>
	

			  <div className="form-group">
			  	<label htmlFor="pasword">пароль</label>
    			<input id="password" type="password" className="form-control"  onChange={this.handlePasswordChange} />
			  </div>
			  <div className="form-group">
       		<label htmlFor="pasword_retupe">пароль повторно</label>
			    <input id="pasword_retupe" type="password" className="form-control"  onChange={this.handleRetupePasswordChange} />
			  </div>
			  <span>* все поля обязательны для заполнения</span>

			  <button type="submit" className="btn btn-primary">Зарегистрировать</button>

			  <div className='auth-form-messages'>
			  {(this.state.required)?
			  	<span>loading...</span>
			  	:
			  	<span>{this.state.result}</span>
			  }
			  </div>	
			</form>
		)
	}

}

export default Register