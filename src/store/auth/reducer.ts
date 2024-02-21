import { getTokenFromStorage, getUserFromStorage } from "../../utils/helpers/token.helper"
import { LOGOUT_USER, SET_AUTHENTICATED, SET_TOKEN, SET_USER } from "./actionTypes"

const initialState = {
    user: getUserFromStorage(),
    isAuthenticated: false,
    token: getTokenFromStorage()
}

export const authReducer = (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case SET_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: action.payload
            }
        case LOGOUT_USER:
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                user: null
            }
        default:
            return state;
    }
}