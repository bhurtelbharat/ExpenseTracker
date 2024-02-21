import { PostRequest, PutRequest } from "../../plugins/https"

export const AddFeatures =(data: any) =>{
    return PostRequest("feature",data)
}
export const EditFeatures =(data: any, id: string | number) =>{
    return PutRequest(`feature/${id}`,data)
}