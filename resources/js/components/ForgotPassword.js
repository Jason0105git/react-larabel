import React, { Component } from 'react';
import axios from 'axios'

class ForgotPassword extends Component {
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
		this.getParameters = this.getParameters.bind(this)
	}

  getParameters(){
  	const  query = window.location.search.substring(1);
  	console.log(query)
  	const vars = query.split("&")
  	console.log(vars)
  	// TODO анализ ключей
  	vars.map(index=> console.log(index.split('=')))
  	/*     var query = window.location.search.substring(1);
        console.log(query)//"app=article&act=news_content&aid=160990"
        var vars = query.split("&");
        console.log(vars) //[ 'app=article', 'act=news_content', 'aid=160990' ]
        for (var i=0;i<vars.length;i++) {
          var pair = vars[i].split("=");
         console.log(pair)//[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ] 
        if(pair[0] == variable){return pair[1];}
         }
   */      return(false);
  }


	componentDidMount(){
		console.log('analize parameters')
		this.getParameters()
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
				<h5>отправить инструкцию повосстановлению пароля</h5>
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

export default ForgotPassword
