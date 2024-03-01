import { GetRequest, PostRequest } from '../../plugins/https'

export const APIAuthenticateuser =(data: any) =>{
    return PostRequest('authentication',data);
}

export const APIAuthenticateGoogleSignin = (data: any) => {
    return PostRequest('/users/google-connect', data)
}


export const APIChangeUserPassword = (data: any) => {
    return PostRequest('/users/change-password', data)
}

export const APIGetMyData = () => {
    return GetRequest('/users/me')
}