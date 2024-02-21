import { APIAuthenticateuser } from "../../API/Authorization/Authentication"
import baseAxios from "../../plugins/axios"
import { setTokenToLocalStorage, setUserToLocalStorage } from "../../utils/helpers/token.helper"
import { SET_TOKEN, SET_USER, SET_AUTHENTICATED, LOGOUT_USER } from './actionTypes'

export const setUser = (data:any)=>{
     return {
        type: SET_USER,
        payload: data
     }
}

export const setIsAuthenticated =(data: any) =>{
    return {
        type: SET_AUTHENTICATED,
        payload:data
    }
}

export const setToken = (data:any)=>{
     return {
        type: SET_TOKEN,
        payload: data
     }
}

const setAuthorizationHeader = (token:string)=> {
    baseAxios.defaults.headers.common = {
        ...baseAxios.defaults.headers.common,
        Authorization: 'bearer ' + token
    }
}


const deleteAuthorizationHeader = ()=> {
    delete baseAxios.defaults.headers.common.Authorization;
}

export const authenticateAdminUser =({username, password}: {username: string, password: string}) =>async  (dispatch:any) =>{
    const res:any = await APIAuthenticateuser({username,password});

    if(res.statusCode === 201){
        dispatch(setToken(res.data.accessToken));
        dispatch(setUser(res.data.user));
        // dispatch(setIsAuthenticated(true));
        setTokenToLocalStorage(res.data.accessToken)
        setAuthorizationHeader(res.data.accessToken)
        setUserToLocalStorage(res.data.user)
    }
}

export const logout =()=>{
    localStorage.clear();
    deleteAuthorizationHeader();
    return {
        type: LOGOUT_USER
    }
}

