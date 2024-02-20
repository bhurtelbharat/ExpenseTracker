import { PostRequest } from "../../plugins/https"

export const UploadImage =(data: any) =>{
    return PostRequest("image/upload-image",data)
}