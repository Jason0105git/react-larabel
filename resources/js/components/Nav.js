import React, { Component } from 'react'
import {Link} from 'react-router-dom'



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
				  {(props.isLogged)&&
				  <li className="nav-item">
				  	<div className="user-nav-info"><span>{props.user.firstName}</span>&nbsp;<span>{props.user.lastName}</span></div>
				  </li>
					}
					
		    	<li className="nav-item">
			      	<Link className="nav-link" to='/dashboard'>Личный кабинет</Link>
			    </li>
			 </ul>
		</nav>
	)
}

