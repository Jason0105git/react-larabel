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

class Main extends Component {
	constructor(props){
		super(props)
		this.state = {
			loged: false,
			redirect: false,
			par: getParameters(),
		}
	//	this.renderRedirect = this.renderRedirect.bind(this)
//		this.clearRedirect = this.clearRedirect.bind(this)
		this.clearRedirect = this.clearRedirect.bind(this)
	}

	componentDidMount(){
		//console.log(getParameters())
	}
/*

	обработка get запроса получаем key

	componentWillMount(){

		const par =	getParameters()
		this.setState({par:par})
		if(par.key == "123"){
			this.setState({redirect:true})
		}else {
			this.setState({redirect:false})
		}
		console.log('componentWillMount')
	
	}
*/

/*	renderRedirect(){
		const redirect = this.state.redirect;
    if (redirect) {
    	//this.setState({redirect:false}) 
      return <ResetPassword par={this.state.par} />
   }
  }*/

  clearRedirect(){
  	const par = this.state.par
  	par.key = ''
  	this.setState({par : par})
  }

/*
	componentWillUnmount(){
		console.log('componentWillUnmount')
		this.setState({redirect:false,par:null})
	}
*/
/*
componentDidMount(){
		console.log('componentDidMount')
		console.log(this.props)
	}
*/
	render(){
		//console.log(getParameters())
		console.log('main par: ',this.state.par)
		//const uripar=this.state.par
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
				
				{(this.state.par.key==="123")?<ResetPassword foo={this.clearRedirect} uripar={this.state.par} />:
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
