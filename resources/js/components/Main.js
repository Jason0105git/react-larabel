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

import {URI_PARAMER_OPERATION, URI_PARAMER_RESTOREPW, URI_TYPE_OPERATION} from '../constants'
import md5 from 'js-md5'

const isRestorePassword = (uri) =>{
  	if(!uri.opr || !uri.type || !uri.uid || !uri.n){
  		return false
  	}
  	const oprOk = (uri.opr === 'reset')
  	const typeOk = (uri.type === 'confirm')
  	const codeOk = (uri.n === md5(uri.uid))
		return (oprOk && typeOk && codeOk)
  }



class Main extends Component {
	constructor(props){
		super(props)
		this.state = {
			isLogged: false,
			redirect: false,
			par: getParameters(),
			user: {},
		}
		this.clearRedirect = this.clearRedirect.bind(this)
		this.doLogout = this.doLogout.bind(this)
		this.doLogin = this.doLogin.bind(this)
	}

  clearRedirect(){
  	const par = this.state.par
  	par.opr = ''
  	this.setState({par : par})
  }


	doLogout(){
		//console.log('Main: do logout')
		this.setState({isLogged: false,user:{}})
	}
	doLogin(value){
		this.setState({isLogged:value.isLogged,user:value.user})
		console.log(this.state)
	}


 
	render(){
		const restorePassword = isRestorePassword(this.state.par)
		
		return(
				<BrowserRouter>
			<div className="container-fluid content-wrapper">
			<header>
				{/*<AskodsHeader />*/}
			</header>
			<nav>
			{
				(restorePassword)?
				<span></span>:
				<Nav isLogged={this.state.isLogged} doLogout={this.doLogout} user={this.state.user} />
			}
			</nav>
			<div className="row">
			<div className="col-md-3"></div>
			<main className="col-md-6">
				{(restorePassword)?	
					<ResetPassword clearRedirect={this.clearRedirect} uripar={this.state.par} />
					:
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/dashboard' component={Dashboard} />
						<Route path='/login' render={ (props)=> <Login  doLogin={this.doLogin} /> } />
						<Route path='/register' component={Register} />		
						<Route path='/forgot' component={ForgotPassword} />
						<Route path='/reset' component={ResetPassword} />
					</Switch>

				}	
				

			</main>			
			<div className="col-md-3"></div>
			</div>
			<footer></footer>
			
			</div>
				</BrowserRouter>
		)

	}
} // Main
export default Main

