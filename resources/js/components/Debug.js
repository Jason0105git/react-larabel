import React,{Component} from 'react';
import axios from 'axios'

class Debug extends Component {
	constructor(props){
		super(props)
		this.run = this.run.bind(this)
		this.clear = this.clear.bind(this)
		this.state = {
			mess: ''
		}
	}

	run(){

		axios.get('/api/debug',{uid:'2',opr:'reset'})
			.then(response=>{console.log(response.data)})
			.catch(error=>{console.log(error)})

		
		const mess = 'run'
		this.setState({mess:mess})
		console.log('run')
	}

	clear(){
		const mess = ''
		this.setState({mess:mess})
	}

	render(){
		return(
		<div>	
			
			{this.state.mess}
			<hr />

			<button type="submit" className="btn btn-primary" onClick={this.run}>debugme</button>
			<hr />
			
			<button type="submit" className="btn btn-primary" onClick={this.clear}>clearme</button>
		</div>
		)
	}
}

export default Debug