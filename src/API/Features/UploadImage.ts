import { PostRequest } from "../../plugins/https"

export const UploadImage =(formData: any) =>{
    return PostRequest("image/upload-image",formData)
}