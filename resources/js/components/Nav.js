import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Nav extends Component {
	constructor(props){
		super(props)
		this.handleLogoutClicked = this.handleLogoutClicked.bind(this)
	}


	handleLogoutClicked(){
		this.props.logout()
	}

	render(){
		console.log(this.props)
	return(
		<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
			 <ul className="navbar-nav">
			    <li className="nav-item active">
			    	<Link className="nav-link" to='/'>Главная</Link>
			    </li>
			    <li className="nav-item">
			    	{
			    		(this.props.loged)?
			    		<Link className="nav-link" to='/' onClick={this.handleLogoutClicked}>Выйти</Link>:
			    		<Link className="nav-link" to='/login'>Войти</Link>
			    	}
			      
			    </li>
	
			    <li className="nav-item">
			    	{(this.props.loged)?
			      	<Link className="nav-link" to='/dashboard'>Личный кабинет</Link>:
			      	<span></span>}
			    </li>
			 </ul>
		</nav>
	)		
	}
}

export default Nav

