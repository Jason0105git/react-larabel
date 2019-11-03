import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {MESSAGE_SYSTEM_ERROR, LABEL_BTN_LOGIN, LABEL_BTN_FORGOT_PASSWORD, LABEL_BTN_REGISTER, 
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
			isLogged: false,
			message: '',
			response: false,

		}
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
		this.setState({response:true})
		this.setState({message:''})	
			axios.post('/api/login', this.state.user)
	          .then(response => {
	            if(response.data.result === 'logged'){
	            
            	this.setState({data:response.data.user,response: false, isLogged:true,message: 'успешная авторизация' })
            	
	            } else {
	            	this.setState({data:null,isLogged:false, response: false,message: 'неверные логин-пароль'})
	            }
						})
	          .catch(error => {
	    					this.setState({message:'системная ошибка', response: false})      		
	          })
	}

	render(){
		console.log('Login props: ',this.props.doLogin)
		if(this.state.isLogged) return (
			<div>
			<h1>успешная авторизация</h1>
			
			      <Link to='/' className="link-cancel">
	  					<button type="submit" className="btn btn-light btn-outline-secondary">перейти на главную</button>
	  				</Link>
			</div>
		 )
		return(
			
		<form className="dev-block" onSubmit={this.handleSubmitForm}>
		 		<h4>авторизация</h4>
				<div className="form-group">
			  	<label htmlFor="email">email:</label>
			    <input type="email" 
			    	className="form-control" 
			    	id="email" 
			    	onChange={this.handleEmailChange.bind(this)}
			    />
			  </div>
	  		<div className="form-group">
	    		<label htmlFor="password">пароль:</label>
	    		<input type="password" 
	    			className="form-control" 
	    			id="password" 
	    			onChange={this.handlePasswordChange.bind(this)}
	    		/>
	  		</div>

	  		<div className='auth-form-messages'>
	  			{(this.state.response)?<span>...</span>:<span>{this.state.message}</span>}

	  		</div>
	  		<nav className="navbar navbar-expand-sm">
	  		<ul className="navbar-nav">
			    <li className="nav-item active">
			    	<button type="submit" className="btn btn-primary">войти</button>
			    </li>
			    <li className="nav-item">
			      <Link to='/' className="link-cancel">
	  					<button type="submit" className="btn btn-primary">отмена</button>
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