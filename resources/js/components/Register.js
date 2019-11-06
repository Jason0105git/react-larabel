// Register.js
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {validateNewPassword} from '../utils'
import {MESSAGE_SYSTEM_ERROR, 
	LABEL_BTN_REGISTER, LABEL_BTN_CANCEL, MSG_EMAIL_EXISTS, MSG_REGISTER_SUCCESSED} from '../constants' 



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
			confirmPassword: '',
			requested: false,
			message: '',
		}

		this.handleSubmitForm = this.handleSubmitForm.bind(this)
		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)
		this.handleNameChange = this.handlePasswordChange.bind(this)
		this.handleLastNameChange = this.handleLastNameChange.bind(this)
		this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
		this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this)
		this.handlePhoneChange = this.handlePhoneChange.bind(this)
		this.clearMessage = this.clearMessage.bind(this)
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

	handleConfirmPasswordChange(e){
		this.setState({confirmPassword: e.currentTarget.value})
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

	clearMessage(){
		this.setState({message:''})
	}

	handleSubmitForm(e){
		this.setState({message:'...'})
		e.preventDefault()
		const validPassword = validateNewPassword(this.state.user.password, this.state.confirmPassword)
		
		if(validPassword.validate){
			this.setState({requested: true})
			axios.post('/api/register', this.state.user)
	          .then(response => {
	            console.log(response.data)	            
	            if(response.data === 'email exists'){
	            	 this.setState({message: MSG_EMAIL_EXISTS})
	            }else {	 
	            	this.setState({message: MSG_REGISTER_SUCCESSED })
	            }
	            this.setState({result:response.data, requested: false})

	          })
	          .catch(error => {
	    					this.setState({message:MESSAGE_SYSTEM_ERROR})      		
	          })
		} else {
			this.setState({result: validPassword.message})	
		}
  }

	render(){

		return(
			<form className="dev-block" onSubmit={this.handleSubmitForm}>
				<h4>регистрация</h4>
	
				<div className="form-group">
       		<label htmlFor="firstname">имя</label>
					<input id="firstname" type="text" className="form-control" required onClick={this.clearMessage} onChange={this.handleFirstNameChange} />	
				</div>

				<div className="form-group">
       		<label htmlFor="lastname">фамилия</label>
       		<input id="lastname" type="text" className="form-control" required onClick={this.clearMessage} onChange={this.handleLastNameChange} />	
				</div>

				

				<div className="form-group">
     			<label htmlFor="phone">телефон</label>
      		<input id="phone" type="tel" className="form-control" required onClick={this.clearMessage} pattern="['+']{1}[7]{1}[9]{1}[0-9]{10}" placeholder={'+790000000000'} onChange={this.handlePhoneChange}/>
      	</div>

			  <div className="form-group">
			  	<label htmlFor="email">email</label>
    		  <input id="email" type="email" className="form-control"  onClick={this.clearMessage} onChange={this.handleEmailChange} />
			  </div>
	

			  <div className="form-group">
			  	<label htmlFor="pasword">пароль</label>
    			<input id="password" type="password" className="form-control" onClick={this.clearMessage}  onChange={this.handlePasswordChange} />
			  </div>
			  <div className="form-group">
       		<label htmlFor="pasword_confirm">пароль повторно</label>
			    <input id="pasword_confirm" type="password" className="form-control"  onClick={this.clearMessage} onChange={this.handleConfirmPasswordChange} />
			  </div>
			  <span>* все поля обязательны для заполнения</span>

			  <button type="submit" className="btn btn-primary">Зарегистрировать</button>
			  <Link to='/' className="link-cancel">
	  					<button type="submit" className="btn btn-primary">{LABEL_BTN_CANCEL}</button>
	  		</Link>
			  <div className='auth-form-messages'>
			  {(this.state.required)?
			  	<span>{this.state.message}</span>
			  	:
			  	<span>{this.state.message}</span>
			  }
			  </div>	
			</form>
		)
	}

}

export default Register