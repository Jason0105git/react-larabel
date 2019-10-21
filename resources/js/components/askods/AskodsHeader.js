import React from 'react';
import logo from './logo.png';
import {Link } from 'react-router-dom'
import './askods.css'

export const  AskodsHeader = () => {
	
	return(
			<div className="askods-wrapper row">
					<div className="askods-header text-center">
						<div className="askods-item">
							<img src={logo} className="App-logo" alt="logo" />
						</div>
						<div className="askods-item">
							<h1>0-800-50-15-60</h1>
							<p>безкоштовна багатоканальна телефонна лінія</p>
						</div>
						<div className="askods-item">
							<h1>050-450-15-60</h1>
							<p>вартість дзвінків відповідно до тарифів Вашого оператора</p>
						</div>
			  	</div>
		
	  	</div>
    )

}