import { GetRequest } from "../../plugins/https"

export const GetTestimonials =() =>{
    return GetRequest('testimonial')
}