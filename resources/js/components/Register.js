// Register.js
import React, { Component } from 'react'
import axios from 'axios'

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
			retupePassword: '',
		}

		this.handleSubmitForm = this.handleSubmitForm.bind(this)
		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)
		this.handleNameChange = this.handlePasswordChange.bind(this)
		this.handleLastNameChange = this.handleLastNameChange.bind(this)
		this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
		this.handleRetupePasswordChange = this.handleRetupePasswordChange.bind(this)
		this.handlePhoneChange = this.handlePhoneChange.bind(this)
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

	handleRetupePasswordChange(e){
		this.setState({retupePassword: e.currentTarget.value})
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

 

	handleSubmitForm(e){

		// TODO: validate passwords
   
		e.preventDefault()
	//	console.log(this.state)

	//	(this.state.user.password === this.state.retupePassword)? 
			axios.post('/api/register', this.state.user)
	          .then(response => {
	            // redirect to the homepage
	            //history.push('/')
	            console.log(response.data)
	            this.setState({result:response.data})
	          })
	          .catch(error => {
	          		console.log(error.response)

	          })
    //	:this.setState({result:'пароли не совпадают'})      
    }

	render(){

		return(
			<form className="col-sm-3  dev-block" onSubmit={this.handleSubmitForm}>
				<h4>регистрация</h4>
				<div className="form-group">
					<input type="text" className="form-control" required placeholder='фамилия' onChange={this.handleLastNameChange} />	
				</div>
				<div className="form-group">
					<input type="text" className="form-control" required placeholder='имя' onChange={this.handleFirstNameChange} />	
				</div>
				<div className="form-group">
      		<input type="tel" className="form-control" required pattern="['+']{1}[7]{1}[9]{1}[0-9]{10}" id="tel" placeholder={'+790000000000'} onChange={this.handlePhoneChange}/>
      	</div>
			  <div className="form-group">
			    <input type="email" className="form-control" placeholder='email' id="email"  onChange={this.handleEmailChange} />
			  </div>
			  <div className="form-group">
			    <label htmlFor="pwd">пароль:</label>
			    <input type="password" className="form-control" id="pwd"  onChange={this.handlePasswordChange} />
			  </div>
			  <div className="form-group">
			    <label htmlFor="pwd">пароль повторно:</label>
			    <input type="password" className="form-control" id="pwd"  onChange={this.handleRetupePasswordChange} />
			  </div>
			  <span>* все поля обязательны для заполнения</span>

			  <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
			  <div className='messages'>{this.state.result}</div>
			</form>
		)
	}

}

export default Register