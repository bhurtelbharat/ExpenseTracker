import { PostRequest } from "../../plugins/https"

export const AddTestimonials =(data:any) =>{
    return PostRequest('testimonial',data)
}