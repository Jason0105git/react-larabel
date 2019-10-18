// Register.js
import React, { Component } from 'react'
import axios from 'axios'

class Register extends Component {
	constructor(props){
		super(props)
		this.state = {
			user: {
				firstname: 'иванов',
				lastname: 'сергей',
				email: 'ivam@assdff.dd',
				password: '',
				phone: '+790123456789',
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

 validatePassword(){
 		return (this.state.password === this.state.retupePassword)
 }

	handleSubmitForm(e){
		// TODO: validate passwords
		e.preventDefault()
	
		if(this.state.user.password === this.state.retupePassword){
			
	

			axios.post('/api/register', this.state.user)
	          .then(response => {
	            // redirect to the homepage
	            //history.push('/')
	            console.log(response.data)
	            this.setState({result:response.data})
	          })
	          .catch(error => {
	          		//console.log(error.response)
	    					this.setState({result:'внутренняя ошибка, попробуйте позже'})      		
	          })
		} else {
			this.setState({result:'пароли не совпадают'})	
		}
  }

	render(){

		return(
			<form className="col-sm-3  dev-block" onSubmit={this.handleSubmitForm}>
				<h4>регистрация</h4>
	


				<div className="input-group mb-3 input-group-sm autoriztion-label">
					<div className="input-group-prepend">
       			<span className="input-group-text">фамилия</span>
    			</div>
					<input type="text" className="form-control" required onChange={this.handleLastNameChange} />	
				</div>

				<div className="input-group mb-3 input-group-sm">
					<div className="input-group-prepend">
       			<span className="input-group-text">имя</span>
    			</div>
					<input type="text" className="form-control" required onChange={this.handleFirstNameChange} />	
				</div>
				
				<div className="input-group mb-3 input-group-sm">
					<div className="input-group-prepend">
       			<span className="input-group-text">телефон</span>
    			</div>
      		<input type="tel" className="form-control" required pattern="['+']{1}[7]{1}[9]{1}[0-9]{10}" id="tel" placeholder={'+790000000000'} onChange={this.handlePhoneChange}/>
      	</div>
			  <div className="input-group mb-3 input-group-sm">
			  	<div className="input-group-prepend">
       			<span className="input-group-text">email</span>
    			</div>
			    <input type="email" className="form-control" id="email"  onChange={this.handleEmailChange} />
			  </div>
	

			  <div className="input-group mb-3 input-group-sm">
			  	<div className="input-group-prepend">
       			<span className="input-group-text">пароль</span>
    			</div>
			    <input type="password" className="form-control" id="pwd"  onChange={this.handlePasswordChange} />
			  </div>
			  <div className="input-group mb-3 input-group-sm">
			  	<div className="input-group-prepend">
       			<span className="input-group-text">пароль повторно</span>
    			</div>
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