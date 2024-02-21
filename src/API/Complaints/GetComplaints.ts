import { GetRequest, PutRequest, DeleteRequest, PostRequest} from "../../plugins/https"

export const GetComplaints =() =>{
    return GetRequest('complaint')
}
export const GetComplaintsById =(id:string | number) =>{
    return GetRequest('complaint/'+id)
}
export const PostComplaints =(data:any) =>{
    return GetRequest('complaint', data)
}
export const PutComplaints =(id:string | number, data:any) =>{
    return GetRequest('complaint/'+id, data)
}
export const DeleteComplaints =(id:string | number) =>{
    return DeleteRequest('complaint/'+id)
}