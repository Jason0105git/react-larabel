import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {MESSAGE_SYSTEM_ERROR} from './constants'

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
	            	this.setState({data:response.data.user,logged:true,message:'успешная авторизация'})
	            } else {
	            	this.setState({data:null,logged:false,message:'неверный email или пароль'})
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
			    	<button type="submit" className="btn btn-light btn-outline-secondary">Войти</button>
			    </li>
			    <li className="nav-item">
			    	<Link to="/forgot">
			    		<button type="submit" className="btn btn-light btn-outline-secondary">Забыл пароль...</button>
			    	</Link>
			    </li>
			    <li className="nav-item">
			      <Link to='/' className="link-cancel">
	  					<button type="submit" className="btn btn-light btn-outline-secondary">Вернуться</button>
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