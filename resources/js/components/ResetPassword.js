import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {validateNewPassword} from '../utils'
import {getParameters} from '../utils'
import md5 from 'js-md5'

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
			uriOk: false,
	}
		this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this)
		this.handleСonfirmPasswordChange = this.handleСonfirmPasswordChange.bind(this)
		this.handleSubmitForm = this.handleSubmitForm.bind(this)
		this.checkUri = this.checkUri.bind(this) 
	}


	checkUri(data){
		let result = true;
		console.log('checkUri.data = ', data.uid)
		if(data.n !== md5(data.uid) ){
			return false
		}
		if(data.sig !== md5(md5(data.uid))){
			return false
		}
		return true
	}

	componentDidMount(){


		// TODO: вынести отдельной функцией проверки uid  md5(uid) md5(md5(uid))
		this.setState({uriOk:this.checkUri(this.props.uripar)})
 


	handleСonfirmPasswordChange(e){		
		this.setState({confirmPassword:e.currentTarget.value, message: ''})
	}

	handleNewPasswordChange(e){ 	
		this.setState({newPassword: e.currentTarget.value,message: ''})
	}



	handleSubmitForm(e){
		e.preventDefault()
		console.log(this.state)		


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
		console.log('reset pass', this.props)
		console.log('checkUri = ',this.state.uriOk)
		return(
			<div>
	
			<Link className="nav-link" to='/' onClick={this.props.foo} >Home</Link>
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
			</div> 
		)
	}
}

export default ResetPassword	