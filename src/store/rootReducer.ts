
import { combineReducers } from 'redux'
import { authReducer } from './auth/reducer'
import { notificationReducer } from './notifications/reducer'


export default combineReducers({
    authReducer,
    notificationReducer
})
