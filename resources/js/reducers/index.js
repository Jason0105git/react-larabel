import {combineReducers} from 'redux'
import {reducerUsers} from './users'

export 
	const reducerUser = combineReducers({
		users: reducerUsers,
	})