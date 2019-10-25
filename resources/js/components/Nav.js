import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export const Nav = (loged=false ) => {
	return(
		<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
			 <ul className="navbar-nav">
			    <li className="nav-item active">
			    	<Link className="nav-link" to='/'>Home</Link>
			    </li>
			    <li className="nav-item">
			      <Link className="nav-link" to='/login'>Login</Link>
			    </li>
			    <li className="nav-item">
			      <Link className="nav-link" to='/register'>Register</Link>
			    </li>
			   	<li className="nav-item">
			      <Link className="nav-link" to='/forgot'>Forgot</Link>
			    </li>
			    <li className="nav-item">
			      <Link className="nav-link" to='/reset'>ResetPassword</Link>
			    </li>
			    <li className="nav-item">
			      <Link className="nav-link" to='/dashboard'>Dashboard</Link>
			    </li>
			 </ul>
		</nav>
	)
}