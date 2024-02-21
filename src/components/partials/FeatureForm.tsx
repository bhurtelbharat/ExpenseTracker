import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { Grid, TextInput, GridCol, Textarea, Button } from '@mantine/core';
import { Photo } from "tabler-icons-react";
import { getImageUrl } from '../../utils/helpers/imageUrlHandler'

export const FeatureForm = (props: any) => {
    const { setOpenFeatureModal, form,SetImage } = props
    return <form className="w-full">
        <Grid>
            <Grid.Col span={4} className="flex items-center">
                <Dropzone onDrop={(files: any) => SetImage(files)} maxSize={5 * 1024 ** 2} accept={IMAGE_MIME_TYPE} className="rounded-full border-dashed border-gray-300" >
                    {
                       form.values.img !=="" ? <img src={typeof form.values.img === 'string'? getImageUrl(form.values.img) : URL.createObjectURL(form.values.img)} alt="Feature" className='object-fill h-full w-full'/> : <Photo/>
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
                    <Button variant="outline" color="orange" onClick={() => setOpenFeatureModal(false)}>Cancel</Button> <Button variant="filled" color="orange">Save</Button>
                </Grid.Col>
            </Grid.Col>
        </Grid>
    </form>
}