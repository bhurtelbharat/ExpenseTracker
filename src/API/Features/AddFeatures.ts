import { PostRequest } from "../../plugins/https"

export const AddFeatures =(data: any) =>{
    return PostRequest("feature",data)
}