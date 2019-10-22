import React, { Component } from 'react';
import {validateNewPassword} from '../utils'

class ResetPassword extends Component {

	constructor(props){
		super(props)
		this.state = {
			user: {
				id: null,
				email: '',
				password: '',
			},
			data: null,
			logged: false,
			message: '',
			newPassword: '',
			confirmPassword: '',

		}
		this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this)
		this.handleСonfirmPasswordChange = this.handleСonfirmPasswordChange.bind(this)
		this.handleSubmitForm = this.handleSubmitForm.bind(this)
	}

	handleСonfirmPasswordChange(e){		
		this.setState({confirmPassword:e.currentTarget.value, message: ''})
	}

	handleNewPasswordChange(e){
		this.setState({newPassword: e.currentTarget.value,message: ''})
	}

	handleSubmitForm(e){
		e.preventDefault()
		console.log(this.state)		
/*		if(this.state.newPassword !== this.state.confirmPassword){
			this.setState({message:'пароли не совпадают'})
		}
*/

		const validPassword = validateNewPassword(this.state.newPassword, this.state.confirmPassword)
		this.setState({message:validPassword.message})

/*			axios.post('/api/login', this.state.user)
	          .then(response => {
	            if(response.data.result === 'logged'){
	            	this.setState({data:response.data.user,logged:true,message:'успешная авторизация'})
	            } else {
	            	this.setState({data:null,logged:false,message:'ошибка авторизации'})
	            }
						})
	          .catch(error => {
	    					this.setState({message:'внутренняя ошибка, попробуйте позже'})      		
	          })*/
	}

	render(){
		return(
		 	<form className="col-sm-4  dev-block" onSubmit={this.handleSubmitForm}>
		 		<h4>ввести новый пароль</h4>
		  <div className="form-group">
			  	<label htmlFor="pasword">введите пароль</label>
    			<input id="password" type="password" className="form-control"  onChange={this.handleNewPasswordChange} />
			  </div>
			  <div className="form-group">
       		<label htmlFor="pasword_retupe">подтвердите пароль</label>
			    <input id="pasword_retupe" type="password" className="form-control"  onChange={this.handleСonfirmPasswordChange} />
			  </div>
	  		<button type="submit" className="btn btn-primary">Сменить пароль</button>
	  		<div className='register-form-messages'>
	  			<span>{this.state.message}</span>
	  		</div>
			</form> 
		)
	}
}

export default ResetPassword