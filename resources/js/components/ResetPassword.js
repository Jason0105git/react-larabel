import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {validateNewPassword} from '../utils'
import {getParameters} from '../utils'
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
		      console.log(response.data.result)
		      this.setState({message:response.data.result})
		      })
		    .catch(error => {
		    	this.setState({message:'внутренняя ошибка, попробуйте позже'})      		
		      })
	   	} else {
	  		this.setState({message:validPassword.message})	
	  	} 

/*
		if(validPassword.validate){
			request.data = {uid: this.state.uid, password: this.state.newPassword }
		
		axios.post('/api/reset', request.data)
	    .then(response => {
	      console.log(response.data)
	      })
	    .catch(error => {
	    	this.setState({message:'внутренняя ошибка, попробуйте позже'})      		
	      })
	  }else{
	  	this.setState({message:validPassword.message})	
	  }
*/
	}

	render(){
		//console.log('ResetPass: uid',this.state)
		return(
			<div>
				<hr />
			<Link className="nav-link" to='/' onClick={this.props.foo} >Home</Link>
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
	  		<button type="submit" className="btn btn-primary">Сменить пароль</button>
	  		<div className='register-form-messages'>
	  			<span>{this.state.message}</span>
	  		</div>
			</form>
				<hr />
			</div> 
		)
	}
}

export default ResetPassword	