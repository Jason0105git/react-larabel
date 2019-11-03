import {combineReducers} from 'redux'
import {reducerUsers} from './users'

export 
	const rootReducer = combineReducers({
		users: reducerUsers,
	})