import { getUniqPayload } from "recharts/types/util/payload/getUniqPayload"
import { RECEIVE_NOTIFICATIONS } from "./actionTypes"

const initialState = {
    notifications: []
}
export const notificationReducer =(state = initialState, action: any)=>{
    switch (action.type){
        case RECEIVE_NOTIFICATIONS:{
            return {
                ...state,
                notifications: [action.payload, ...state.notifications]
            }
        }
        default:
            return {
                ...state
            }
        
    }
}