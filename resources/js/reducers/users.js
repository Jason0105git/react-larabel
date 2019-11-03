
/*import {
	REGISTER_ACCOUNT_REQUEST, REGISTER_ACCOUNT_SUCCESS, REGISTER_ACCOUNT_ERROR,
	LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR,
	FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_ERROR,
	RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR
} from '../constants'

*/


//export const MESSAGE_

export const REGISTER_ACCOUNT_REQUEST = 'REGISTER_ACCOUNT_REQUEST'
export const REGISTER_ACCOUNT_ERROR = 'REGISTER_ACCOUNT_ERROR'
export const REGISTER_ACCOUNT_SUCCESS = 'REGISTER_ACCOUNT_SUCCESS'

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST'
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR'
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS'

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST' 
export const RESET_PASSWORD_ERROR  = 'RESET_PASSWORD_ERROR'
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS'

export const LOGOUT_USER  = 'LOGOUT_USER'



const initialState = {
	userID: null,
	userFirstName: '',
	userLastName: '',
	userPhone: '',
	userName: '',
	isLoged: false,
	error: '',	
}

export const reducerUser = (state = initialState, action) => {
	switch(action.type){
		case GET_USER_REQUEST: 
			return {...state, state: action.payload, isLoged: false, error: ''}
		case GET_USER_ERROR:
			return {...state, isFetching: false, isLoged: false, error: 'error of logged, try again'}

		case GET_USER_SUCCESS:  
			const userName = action.payload.getName()     
			const userPic =  action.payload.getImageUrl()
			return {...state,  userName: userName, userPic: userPic, isLoged: true, error: ''}

		case USER_LOGOUT:
			return {...state, userName: 'noname', userPic: 'nouserpic.png', isLoged: false}
		default:
			return state			
	}

}