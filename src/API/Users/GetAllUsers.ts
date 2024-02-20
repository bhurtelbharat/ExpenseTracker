import { GetRequest } from "../../plugins/https"

export const GetAllUsers =() =>{
    return GetRequest('user/all')
}