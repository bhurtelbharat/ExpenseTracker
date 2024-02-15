import { LOGOUT_USER, SET_TOKEN, SET_USER } from "./actionTypes"

const initialState = {
    user: {},
    isAuthenticated: false,
    token: null
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
                isAuthenticated: true,
                token: action.payload
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