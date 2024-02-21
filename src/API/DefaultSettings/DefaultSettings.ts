import { GetRequest, PutRequest } from "../../plugins/https"

export const LoadLandingDefaultSettings = ()=>{
    return GetRequest('default-settings/hero')
}

export const UpdateDefaultSettings = (data:any)=>{
    return PutRequest('default-settings/all',data)
}