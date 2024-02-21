import { GetRequest, PutRequest, DeleteRequest, PostRequest} from "../../plugins/https"

export const GetTestimonials =() =>{
    return GetRequest('testimonial')
}
export const GetTestimonialsById =(id:string | number) =>{
    return GetRequest('testimonial/'+id)
}
export const PostTestimonials =(data:any) =>{
    return GetRequest('testimonial', data)
}
export const PutTestimonials =(id:string | number, data:any) =>{
    return GetRequest('testimonial/'+id, data)
}
export const DeleteTestimonials =(id:string | number) =>{
    return DeleteRequest('testimonial/'+id)
}