import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import '../../css/style.css'

import {AskodsHeader} from './askods/AskodsHeader'

import {Home} from './Home'
import Dashboard from './Dashboard'
import Login from './Login'
import Register from './Register'
import {Nav} from './Nav'
import {getParameters} from '../utils'
import ResetPassword from './ResetPassword'
import ForgotPassword from './ForgotPassword'
import {URI_PARAMER_OPERATION, URI_PARAMER_RESTOREPW, URI_TYPE_OPERATION} from './constants'

class Main extends Component {
	constructor(props){
		super(props)
		this.state = {
			loged: false,
			redirect: false,
			par: getParameters(),
		}
		this.clearRedirect = this.clearRedirect.bind(this)
	}
  clearRedirect(){
  	const par = this.state.par
  	par.opr = ''
  	this.setState({par : par})
  }

  checkURI(){

  }

	render(){

		return(
			<div className="container-fluid content-wrapper">
			<BrowserRouter>
			<header>
				<AskodsHeader />			
			</header>
			<nav>
			{(this.state.par.opr===URI_PARAMER_RESTOREPW && this.state.par.type === URI_TYPE_OPERATION)?<span></span>
				:<Nav par={this.state.par.opr} />	}
			</nav>
			<main>
				{(this.state.par.opr===URI_PARAMER_RESTOREPW && this.state.par.type === URI_TYPE_OPERATION)?<ResetPassword foo={this.clearRedirect} uripar={this.state.par} />:
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/dashboard' component={Dashboard} />
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />		
					<Route path='/forgot' component={ForgotPassword} />
					<Route path='/reset' component={ResetPassword} />
				</Switch>
			}
			
			</main>
			<footer></footer>
			</BrowserRouter>
			</div>
		)

	}
} // Main

ReactDOM.render(<Main />, document.getElementById('root'))
