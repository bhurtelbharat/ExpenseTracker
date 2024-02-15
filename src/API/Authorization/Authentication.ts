import { PostRequest } from "../../plugins/https"

export const APIAuthenticateuser =(data: any) =>{
    return PostRequest('authentication',data);
}