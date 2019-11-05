import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import {AskodsHeader} from './components/askods/AskodsHeader'
//import store from './store/configureStore'

import Main from './components/Main'


require('./bootstrap');


ReactDOM.render(
		
			<Main />
			
		, document.getElementById('root'))

/*
общий стейт для клиентского приложения

commonData: {
	datePromoAction: null,
	totalWiners: null,
}

homeStickers: {
	stickers: [],
	indexMin: null,
	indexMax: null,
	currenctPage: null,
	totalPages: null,

}

client: {
	id: null,
	firstname:'',
	lastname:'',
	phone:'',
	email:''
	isLogged: false,
	stickers: [],
	winner: false
}

sticker:{
	id: null,
	idClient: null
	no: null,
	winner: false,
}
---------------------
actions
registerAccount, deleteAccount, updatePersonalInfo, 
login, logout, forgotPassword, resetPassword,

addSticker, deleteSticker, 

sendMainResetPassword, 
sendMainWinner

typeActions:

requestRegister, responseRegister,
requestLogin  responseLogin, 
logout
requestForgot, responseForgot
requestResetPassword, responseResetPassword

requestGetPersonalInfo, responseGetPersonalInfo
requestUpdatePersonalInfo, responseUpdatePersonalInfo
requestDeleteAccount,  responseDeleteAccount

requestGetStickers responseGetSticers,
requestAddSticker, responseAssSticker
requestDeleteSticker,  responseDeleteSticker

requestGetHomePageStickers, responseGetHomePageStickers

requestGetStatickPage  responseGetStatidPage  ????

*/