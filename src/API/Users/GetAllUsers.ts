import { GetRequest } from "../../plugins/https"

export const GetAllUsers =() =>{
    return GetRequest('user/all')
}
export const GetAllUsersByStatus =(status:string) =>{
    return GetRequest('user/type/'+ status);
}