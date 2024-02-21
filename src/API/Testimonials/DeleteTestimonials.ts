import { DeleteRequest } from "../../plugins/https"

export const DeleteTestimonial =(id:any) =>{
    return DeleteRequest('testimonial/'+id)
}