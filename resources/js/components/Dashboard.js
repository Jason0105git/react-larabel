import React, { Component } from 'react';



class Dashboard extends Component {
	constructor(props){
		super(props)
		this.handleButtonSendMail = this.handleButtonSendMail.bind(this)
	}

	handleButtonSendMail(e){
		e.preventDefault()
		console.log('todo send maiil')
	}

	render(){
		return(
			<div>
			<h1>Dashboard</h1>
	
			</div>
		)
	}

}

export default Dashboard