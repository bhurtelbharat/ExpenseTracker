import { APIAuthenticateuser } from "../../API/Authorization/Authentication"
import baseAxios from "../../plugins/axios"
import { clearLocalStorage, setTokenToLocalStorage, setUserToLocalStorage } from "../../utils/helpers/token.helper"
import store from "../store"
import { SET_TOKEN, SET_USER, SET_AUTHENTICATED, LOGOUT_USER } from "./actionTypes"

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

export const setLogout = ()=>{
     return {
        type: LOGOUT_USER,
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
        dispatch(setUser(res.data.user?.length > 0 ? res.data.user[0]: null));
        dispatch(setIsAuthenticated(true));
    
        setTokenToLocalStorage(res.data.accessToken)
        setAuthorizationHeader(res.data.accessToken)
        setUserToLocalStorage(res.data.user[0])
    }
    console.log(res);
}

export const removeSession =() => async (dispatch:any)=> {
    await deleteAuthorizationHeader();
    dispatch(setLogout());
    clearLocalStorage();
}


