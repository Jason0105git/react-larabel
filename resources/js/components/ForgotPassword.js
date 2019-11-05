import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {getParameters} from '../utils'

class ForgotPassword extends Component {
	constructor(props){
		super(props)
		this.state = {

			mail:{
				emailTo : '',
			},
			emailOk: false,
			message: '',
			request: false,
		}
		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handleSubmitForm  = this.handleSubmitForm.bind(this)
	
	}

  

	componentDidMount(){
		console.log('analize parameters')
		console.log(getParameters())
	}
	

	handleEmailChange(e){
		const mail = this.state.mail
		mail.emailTo = e.currentTarget.value
		this.setState({mail:mail,message:''})
	}

	handleSubmitForm(e){
		e.preventDefault()
		this.setState({message:'...',request:true})
		axios.post('/api/forgot',this.state.mail)
			.then(response => {
					if(response.data.result === 'restoreOk'){
						this.setState({request: false, emailOk: true, message: 'инструкции отправлены'})
					}else {
						this.setState({request: false, emailOk: false, message: 'email не зарегистрирован'})
					}
				})
			.catch(error => {
				this.setState({request: true,mailOk: false, message: 'системная ошибка'})
				console.log(error => console.log(error))
			})
	}

	render(){
		return(
			<form className="dev-block" onSubmit={this.handleSubmitForm}>
				<h5>отправить инструкцию повосстановлению пароля</h5>
				<div className="form-group">
			  	<label htmlFor="email">email</label>
    		  <input id="email" type="email" className="form-control"  onChange={this.handleEmailChange} />
    		  <div className='auth-form-messages'>
    		  	{(this.state.request)?
    		  		<div className="spinner-border text-muted"></div>
    		  		:<div><span>{this.state.message}</span></div>
    		  	}
	  				
	  			</div>
					<nav className="navbar navbar-expand-sm">
		  			<ul className="navbar-nav">
					    <li className="nav-item active">
					    	<button type="submit" className="btn btn-primary">Восстановить</button>
					    </li>
					    <li className="nav-item">
					      <Link to='/' className="link-cancel">
			  					<button type="submit" className="btn btn-primary">Вернуться</button>
			  				</Link>
					    </li>
					  </ul>  
				  </nav>
				</div>
			</form>
		)
	}
}

export default ForgotPassword
