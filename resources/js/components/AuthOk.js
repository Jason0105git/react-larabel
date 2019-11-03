import React from 'react';
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

export const AuthOk = () => {
	return(
		<div>
			<h5>успешная авторизация</h5>
			<Link path="/">Перейти на главную</Link>
		</div>
	)
}