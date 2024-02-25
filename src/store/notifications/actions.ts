import { RECEIVE_NOTIFICATIONS, SET_NOTIFICATIONS } from "./actionTypes"

export const pushNotification =(data:any)=>{
    return {
        type: RECEIVE_NOTIFICATIONS,
        payload: data
    }
}

export const loadNotification =(data:any)=>async (dispatch:any) =>{
    // const res = 
}