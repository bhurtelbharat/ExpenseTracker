import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { Grid, TextInput, GridCol, Textarea, Button } from '@mantine/core';
import { Photo } from "tabler-icons-react";

export const TestimonialModal = (props: any) => {
    const { setOpenTestimonialModal, form,SetImage } = props
    return <form className="w-full">
        <Grid>
            <Grid.Col span={4} className="flex items-center">
                <Dropzone onDrop={(files: any) => SetImage(files)} maxSize={5 * 1024 ** 2} accept={IMAGE_MIME_TYPE} className="rounded-full border-dashed border-gray-300" >
                    {
                       form.values.img !=="" ? <img src={URL.createObjectURL(form.values.img)} alt="Testimonial" className='object-fill h-full w-full'/> : <Photo/>
                    }
                </Dropzone>
            </Grid.Col>
            <Grid.Col span={8}>
                <Grid.Col span={12}>
                    <TextInput placeholder="Title" variant="filled" {...form.getInputProps('title')} required />
                </Grid.Col>
                <Grid.Col span={12}>
                    <TextInput placeholder="Designation" variant="filled" {...form.getInputProps('designation')} required />
                </Grid.Col>
                <Grid.Col span={12}>
                    <Textarea placeholder="Content" variant="filled" {...form.getInputProps('content')} required />
                </Grid.Col>
                <Grid.Col span={12}>
                    <Button variant="outline" color="orange" onClick={() => setOpenTestimonialModal(false)}>Cancel</Button> <Button variant="filled" color="orange">Save</Button>
                </Grid.Col>
            </Grid.Col>
        </Grid>
    </form>
}