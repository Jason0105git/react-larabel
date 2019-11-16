import React, { Component } from 'react';



class Dashboard extends Component {
	constructor(props){
		super(props)
		this.handleButtonSendMail = this.handleButtonSendMail.bind(this)
		/*this.dataListTemplate = this.dataListTemplate.bind(this)
		this.personalDataTemplate = this.personalDataTemplate.bind(this)*/
	}

	handleButtonSendMail(e){
		e.preventDefault()
		console.log('todo send maiil')
	}

	render(){
		return(
			<div>
			<h1>Dashboard</h1>
			{/* пока темплейты, возможно будут отдельные компоненты*/}	
			<form className="dev-block">
				<h2>мои стикеры</h2>
				<hr>
				</hr>
				
			</form>
			</div>
		)
	}

}

export default Dashboard