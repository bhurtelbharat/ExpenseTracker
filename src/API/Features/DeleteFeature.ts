import { DeleteRequest } from "../../plugins/https"

export const DeleteFeature =(id:any) =>{
    return DeleteRequest('feature/'+id)
}