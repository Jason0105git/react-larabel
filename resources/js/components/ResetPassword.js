import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {validateNewPassword, getParameters} from '../utils'
import {MESSAGE_SYSTEM_ERROR, LABEL_BTN_SET_PASSWORD, LABEL_BTN_CANCEL, MSG_PASSWORD_RECOVERED} from './constants' 
import md5 from 'js-md5'

class ResetPassword extends Component {

	constructor(props){
		super(props)
		this.state = {
			uid: this.props.uripar.uid,
			message: '',
			newPassword: '',
			confirmPassword: '',
	}
		this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this)
		this.handleСonfirmPasswordChange = this.handleСonfirmPasswordChange.bind(this)
		this.handleSubmitForm = this.handleSubmitForm.bind(this)
		this.clearMessage =  this.clearMessage.bind(this)

	}


	componentDidMount(){

		// TODO: вынести отдельной функцией проверки uid  md5(uid) md5(md5(uid))
	//	this.setState({uriOk:this.checkUri(this.props.uripar)})
	} 


	handleСonfirmPasswordChange(e){		
		this.setState({confirmPassword:e.currentTarget.value, message: ''})
	}

	handleNewPasswordChange(e){ 	
		this.setState({newPassword: e.currentTarget.value,message: ''})
	}


	clearMessage(){
		this.setState({message:''})
	}

	handleSubmitForm(e){

		e.preventDefault()
	
		const validPassword = validateNewPassword(this.state.newPassword, this.state.confirmPassword)
		const request = {}	


		if(validPassword.validate){
			request.data = {uid: this.state.uid, password: this.state.newPassword }
			
			axios.post('/api/reset', request.data)
		    .then(response => {
		      this.setState({message:MSG_PASSWORD_RECOVERED})
		      })
		    .catch(error => {
		    	this.setState({message:MESSAGE_SYSTEM_ERROR})      		
		      })
	   	} else {
	  		this.setState({message:validPassword.message})	
	  	} 
	}

	render(){
		return(
		 	<form className="col-sm-4  dev-block" onSubmit={this.handleSubmitForm}>
		 		<h4>ввести новый пароль</h4>
		  	<div className="form-group">
			  	<label htmlFor="pasword">введите пароль</label>
    			<input id="password" 
    				type="password" 
    				className="form-control"  
    				onClick={this.clearMessage}
    				onChange={this.handleNewPasswordChange} />
			  </div>
			  <div className="form-group">
       		<label htmlFor="pasword_retupe">подтвердите пароль</label>
			    <input id="pasword_retupe" 
			    	type="password" 
			    	className="form-control"  
			    	onClick={this.clearMessage} 
			    	onChange={this.handleСonfirmPasswordChange} />
			  </div>
		  	<div className='auth-form-messages'>
	  				<span>{this.state.message}</span>
	  			</div>
				<nav className="navbar navbar-expand-sm">
		  		<ul className="navbar-nav">
				    <li className="nav-item active">
				    	<button type="submit" className="btn btn-light btn-outline-secondary">{LABEL_BTN_SET_PASSWORD}</button>
				    </li>
				    <li className="nav-item">
				      <Link to='/' className="link-cancel" onClick={this.props.foo}>
			  				<button type="submit" className="btn btn-light btn-outline-secondary">{LABEL_BTN_CANCEL}</button>
			  			</Link>
				    </li>
				  </ul>  
				</nav>
			</form>
		)
	}
}

export default ResetPassword	