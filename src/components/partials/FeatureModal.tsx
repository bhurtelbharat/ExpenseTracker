import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { Grid, TextInput, GridCol, Textarea, Button } from '@mantine/core';
import { Photo } from "tabler-icons-react";

export const FeatureModal = (props: any) => {
    const { setOpenFeatureModal, form,SetImage,SaveFeature } = props
    return <form className="w-full feature-modal">
        <Grid>
            <Grid.Col span={4} className="flex items-center p-xs">
                <Dropzone onDrop={(files: any) => SetImage(files)} maxSize={5 * 1024 ** 2} accept={IMAGE_MIME_TYPE} className="rounded-full border-dashed border-gray-300" >
                    {
                       form.values.img !=="" ? 
                       <img src={typeof form.values.img === 'string' ? form.values.img : URL.createObjectURL(form.values.img)} 
                       alt="Feature" style={{aspectRatio:1, borderRadius: '50%'}} 
                       className='h-full w-full'/> : 
                       <Photo/>
                    }
                </Dropzone>
            </Grid.Col>
            <Grid.Col span={8}>
                <Grid.Col span={12}>
                    <TextInput placeholder="Title" variant="filled" {...form.getInputProps('title')} required />
                </Grid.Col>
                <Grid.Col span={12}>
                    <Textarea placeholder="Description" variant="filled" {...form.getInputProps('description')} required />
                </Grid.Col>
                <Grid.Col span={12}>
                    <Button variant="outline" color="orange" onClick={() => setOpenFeatureModal(false)}>Cancel</Button> <Button variant="filled" color="orange" onClick={(event) =>SaveFeature() }>Save</Button>
                </Grid.Col>
            </Grid.Col>
        </Grid>
    </form>
}