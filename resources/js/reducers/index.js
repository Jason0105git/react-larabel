import {combineReducers} from 'redux'
import {reducerUser} from './user'

export 
	const rootReducer = combineReducers({
		user: reducerUser,
	})