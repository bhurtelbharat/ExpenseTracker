import { GetRequest } from "../../plugins/https"

export const GetFeatures =() =>{
    return GetRequest('feature')
}