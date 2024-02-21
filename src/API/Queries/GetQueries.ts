import { GetRequest, PutRequest, DeleteRequest, PostRequest} from "../../plugins/https"

export const GetQueries =() =>{
    return GetRequest('query')
}
export const GetQueriesById =(id:string | number) =>{
    return GetRequest('query/'+id)
}
export const PostQueries =(data:any) =>{
    return GetRequest('query', data)
}
export const PutQueries =(id:string | number, data:any) =>{
    return GetRequest('query/'+id, data)
}
export const DeleteQueries =(id:string | number) =>{
    return DeleteRequest('query/'+id)
}