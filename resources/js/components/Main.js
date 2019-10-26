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

const MainTemplate = () => {
	return(
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/dashboard' component={Dashboard} />
			<Route path='/login' component={Login} />
			<Route path='/register' component={Register} />		
			<Route path='/forgot' component={ForgotPassword} />
			<Route path='/reset' component={ResetPassword} />
		</Switch>
	)
}


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


 
	render(){
		const restorePassword = isRestorePassword(this.state.par)
		return(
			<div className="container-fluid content-wrapper">
			<BrowserRouter>
			<header>
				{/*<AskodsHeader />			*/}
			</header>
			<nav>
			{
			(restorePassword)?
				<span></span>:
				<Nav par={this.state.par.opr} clearRedirect={this.clearRedirect} />
			}

			</nav>
			<main>
				{(restorePassword)?	
					<ResetPassword foo={this.clearRedirect} uripar={this.state.par} />
					:MainTemplate()
				}
			
			
			</main>
			<footer></footer>
			</BrowserRouter>
			</div>
		)

	}
} // Main

ReactDOM.render(<Main />, document.getElementById('root'))
