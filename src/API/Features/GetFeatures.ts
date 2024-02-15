import { GetRequest } from "../../plugins/https"

export const GetFeatures =(params: any) =>{
    return GetRequest('feature')
}