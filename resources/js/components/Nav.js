import React, { Component } from 'react'
import {Link} from 'react-router-dom'

/*
class Nav extends Component {
	constructor(props){
		super(props)
		this.handleLogoutClicked = this.handleLogoutClicked.bind(this)
		this.state = {
			loged: this.props.loged
		}
	}


	handleLogoutClicked(){
		this.props.onLogout()
	}

	render(){
		console.log('Nav', this.props.loged)
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

export default Nav*/

export const Nav = (props) => {
	
	return(
			<nav className="navbar navbar-expand-sm bg-primary navbar-dark">
			 <ul className="navbar-nav">
			    <li className="nav-item active">
			    	<Link className="nav-link" to='/'>Главная</Link>
			    </li>
			    {(props.isLogged)?
			    <li className="nav-item active">  
				    <Link className="nav-link" onClick={props.doLogout} to='/'>Выйти</Link>
				 </li>  
				:	
			    <li className="nav-item active">
				    <Link className="nav-link" to='/login'>Войти</Link>
				</li>  
				}
				  <li className="nav-item active">  
				    <Link className="nav-link" to='/register'>Регистрация</Link>
				  </li>  
				  <li className="nav-item active">  
				    <Link className="nav-link" to='/forgot'>Восстановить</Link>
				  </li>  
				  <li className="nav-item active">  
				    <Link className="nav-link" to='/reset'>Сбросить</Link>
				  </li>  

		    	<li className="nav-item">
			      	<Link className="nav-link" to='/dashboard'>Личный кабинет</Link>
			    </li>
			 </ul>
		</nav>
	)
}

