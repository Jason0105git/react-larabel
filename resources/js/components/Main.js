import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import '../../css/style.css'

import {AskodsHeader} from './askods/AskodsHeader'

import {Home} from './Home'
import {Dashboard} from './Dashboard'
import Login from './Login'
import {Register} from './Register'
import {Nav} from './Nav'


class Main extends Component {
	constructor(props){
		super(props)
		this.state = {
			loged: false,
		}
	}

	render(){
		return(
			<div className="container-fluid content-wrapper">
			<BrowserRouter>
			<header>
				<AskodsHeader />				
			</header>
			<nav>
				<Nav />
			</nav>
			<main>
				<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/dashboard' component={Dashboard} />
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
				</Switch>
			</main>
			<footer></footer>
			</BrowserRouter>
			</div>
		)

	}
} // Main

ReactDOM.render(<Main />, document.getElementById('root'))
