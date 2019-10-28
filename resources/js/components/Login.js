import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {MESSAGE_SYSTEM_ERROR, LABEL_BTN_LOGIN, LABEL_BTN_FORGOT_PASSWORD, 
	 LABEL_BTN_CANCEL, MSG_LOGIN_SUCCESS, MSG_LOGIN_ERROR } from './constants'

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
		this.setState({message:''})	
			axios.post('/api/login', this.state.user)
	          .then(response => {
	            if(response.data.result === 'logged'){
            	this.setState({data:response.data.user,logged:true,message: MSG_LOGIN_SUCCESS})
	            } else {
	            	this.setState({data:null,logged:false,message: MSG_LOGIN_ERROR})
	            }
						})
	          .catch(error => {
	    					this.setState({message:MESSAGE_SYSTEM_ERROR})      		
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
	  		<div className='auth-form-messages'>
	  			<span>{this.state.message}</span>
	  		</div>
	  		<nav className="navbar navbar-expand-sm">
	  		<ul className="navbar-nav">
			    <li className="nav-item active">
			    	<button type="submit" className="btn btn-light btn-outline-secondary">{LABEL_BTN_LOGIN}</button>
			    </li>
			    <li className="nav-item">
			    	<Link to="/forgot">
			    		<button type="submit" className="btn btn-light btn-outline-secondary">{LABEL_BTN_FORGOT_PASSWORD}</button>
			    	</Link>
			    </li>
			    <li className="nav-item">
			      <Link to='/' className="link-cancel">
	  					<button type="submit" className="btn btn-light btn-outline-secondary">{LABEL_BTN_CANCEL}</button>
	  				</Link>
			    </li>
			  </ul>  
			  </nav>

	  		<div>
	  			
	  		</div>
			</form> 
		)
	}
}

export default Login