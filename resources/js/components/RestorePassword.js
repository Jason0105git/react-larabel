import React, { Component } from 'react';
import axios from 'axios'

class RestorePassword extends Component {
	constructor(props){
		super(props)
		this.state = {

			mail:{
				emailTo : '',
				emailFrom : 'site@site.com',
				subject : 'restore password',
				urlRestore : 'http://rluser/?ref=12345',
			},
			emailOk: false,
			message: ''
		}
		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handleSubmitForm  = this.handleSubmitForm.bind(this)
	}
	handleEmailChange(e){
		const mail = this.state.mail
		mail.emailTo = e.currentTarget.value
		this.setState({mail:mail,message:''})
	}

	handleSubmitForm(e){
		e.preventDefault()
		axios.post('/api/restore',this.state.mail)
			.then(response => {
					if(response.data.result === 'restoreOk'){
						
						this.setState({emailOk: true, message: 'инструкции отправлены'})
					}else {
						this.setState({emailOk: false, message: 'email не зарегистрирован'})
					}
				})
			.catch(error => {
				this.setState({mailOk: false, message: 'системная ошибка'})
				console.log(error => console.log(error))
			})
	
		console.log('sendme')
	}

	render(){
		return(
			<form className="col-sm-4  dev-block" onSubmit={this.handleSubmitForm}>
				<h3>отправить инструкцию повосстановлению пароля</h3>
				<div className="form-group">
			  	<label htmlFor="email">email</label>
    		  <input id="email" type="email" className="form-control"  onChange={this.handleEmailChange} />
    		  <hr />
    		  	<span>{this.state.message}</span>
    		  <hr />
    		  <button type="submit" className="btn btn-primary">Отправить</button>
			  </div>
			</form>
		)
	}
}

export default RestorePassword
