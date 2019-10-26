import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Login extends Component {

	constructor(props){
		super(props)
		this.state = {
			user: {
				email: '',
				password: '',
			},
			data: null,
			logged: false,
			message: '',

		}
		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)
		this.handleSubmitForm = this.handleSubmitForm.bind(this)
	}

	handlePasswordChange(e){		
		const user = this.state.user
		user.password = e.currentTarget.value
		this.setState({user: user, message:''})
	}

	handleEmailChange(e){
		const user = this.state.user
		user.email = e.currentTarget.value
		this.setState({user: user, message:''})
	}

	handleSubmitForm(e){
		e.preventDefault()
			
			axios.post('/api/login', this.state.user)
	          .then(response => {
	            if(response.data.result === 'logged'){
	            	this.setState({data:response.data.user,logged:true,message:'успешная авторизация'})
	            } else {
	            	this.setState({data:null,logged:false,message:'ошибка авторизации'})
	            }
						})
	          .catch(error => {
	    					this.setState({message:'внутренняя ошибка, попробуйте позже'})      		
	          })
	}

	render(){
		return(
		 	<form className="col-sm-4  dev-block" onSubmit={this.handleSubmitForm}>
		 		<h4>авторизация</h4>
				<div className="form-group">
			  	<label htmlFor="email">email:</label>
			    <input type="email" className="form-control" id="email" onChange={this.handleEmailChange}/>
			  </div>
	  		<div className="form-group">
	    		<label htmlFor="password">пароль:</label>
	    		<input type="password" className="form-control" id="password" onChange={this.handlePasswordChange}/>
	  		</div>
	  		<button type="submit" className="btn btn-primary">Submit</button>
	  		<div className='register-form-messages'>
	  			<span>{this.state.message}</span>
	  		</div>
	  		<div>
	  			<Link to="/forgot">забыл пароль...</Link>
	  		</div>
			</form> 
		)
	}
}

export default Login