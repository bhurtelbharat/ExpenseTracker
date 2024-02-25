import { useState, useEffect } from 'react'
import { CardLayout } from '../common/Card'
import { Trash, Pencil, CirclePlus, Photo } from 'tabler-icons-react'
import { Card, Grid, Modal, TextInput, GridCol, Button, Image, Textarea, ActionIcon } from '@mantine/core'
import { useForm } from '@mantine/form'
import { FeatureForm } from '../../../partials/FeatureForm'
import { UploadImage } from '../../../../API/Features/UploadImage'
import { GetFeatures } from '../../../../API/Features/GetFeatures'
import { getImageUrl, onErrorImage } from '../../../../utils/helpers/imageUrlHandler'
import { modals } from '@mantine/modals'
import { DeleteTestimonials } from '../../../../API/Testimonials/GetTestimonials'
import { errorNotification, successNotification } from '../../../../utils/helpers/notifications'
import { AddFeatures } from '../../../../API/Features/AddFeatures'
import { DeleteFeature } from '../../../../API/Features/DeleteFeature'

export const Features = () => {
    const [openFeatureModal, setOpenFeatureModal] = useState(false)
    const [imageName, setImageName] = useState(null)
    const [selectedData, setSelectedData] = useState(null)
    const [selectedFeature, setSelectedFeature] = useState(-1)
    const [loading, setLoading] = useState(false)

    const form = useForm({
        initialValues: {
            title: '',
            description: '',
            img: '',
        },
    })

    const SetImage = (files: any) => {
        const selectedFile = files[0]
        form.setFieldValue('img', selectedFile)
    }

    const loadFeatures = async () => {
        const res = await GetFeatures()
        setFeatures(res.data)
    }

    const SaveFeature = async () => {
        setLoading(true)
        try {
            if (form.values.img === '' || form.values.img === null) {
                errorNotification({
                    title: 'Error',
                    message: 'Please select an image',
                })
                return
            }

            let imgFile = ''
            if (typeof form.values.img !== 'string') {
                const formData = new FormData()
                formData.append('file', form.values.img)
                const res = await UploadImage(formData)
                imgFile = res.data.filename
            }


            const respData = await AddFeatures({
                img: imgFile,
                title: form.values.title,
                description: form.values.description,
            })
        } catch (e: any) {
            errorNotification({
                title: 'Error',
                message: e,
            })
        }
        setLoading(false)
    }

    const editFeature = (feature: any) => {
        setSelectedFeature(feature)
        form.setFieldValue('title', feature.title)
        form.setFieldValue('description', feature.description)
        form.setFieldValue('img', feature.img)

        setOpenFeatureModal(true)
    }

    const [features, setFeatures] = useState([])

    const showFeatureModal = () => {
        form.reset()
        setOpenFeatureModal(true)
    }


    useEffect(() => {
        loadFeatures()
    }, [])


    const openDeleteConfirmationModal = (id: number) => modals.openConfirmModal({
        title: 'Please confirm your action',
        children: (
            <div>
                Are you sure you want to delete this feature?
            </div>
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onCancel: () => console.log('Cancel'),
        onConfirm: async () => {
            try {
                await DeleteFeature(id)
                await loadFeatures()
                successNotification({
                    title: 'Success',
                    message: 'Feature dele',
                })
            } catch (e) {
                errorNotification({
                    title: 'Error',
                    message: 'Cannot delete f',
                })
            }
        },
    })

    return <Grid className="flex justify-between">
        {
            features.map((feature: any, index) =>
                <Grid.Col span={6} key={index}>
                    <Card padding="xs" withBorder className="w-full h-full">
                        <Grid>
                            <Grid.Col span={4} p={'xs'}>
                                <img src={getImageUrl(feature.img ?? '')} onError={onErrorImage}
                                     className="w-full object-cover object-center" style={{ aspectRatio: '1 / 1' }}
                                     alt={''} />
                            </Grid.Col>
                            <Grid.Col span={8} p={'xs'} className={'h-full flex flex-col'}>
                                <div className={'flex-grow'}>
                                    <div className="font-semibold text-sm">{feature.title}</div>
                                    <div className="text-xs">{feature.description}</div>
                                </div>
                                <div className="flex justify-end">
                                    <ActionIcon aria-label="Edit" variant="transparent"
                                                onClick={(event) => editFeature(feature)}>
                                        <Pencil />
                                    </ActionIcon>
                                    <ActionIcon variant="transparent"
                                                onClick={(event) => openDeleteConfirmationModal(feature.id)}>
                                        <Trash />
                                    </ActionIcon>
                                </div>
                            </Grid.Col>
                        </Grid>
                    </Card>
                </Grid.Col>,
            )
        }
        <Grid.Col span={6} className="min-h-[200px]">
            <div className="w-full h-full flex items-center border-dashed border-2 justify-center pointer"
                 onClick={() => showFeatureModal()}>
                <div className="flex font-semibold text-sm"><span>{<CirclePlus />}</span>Add Feature</div>
            </div>
        </Grid.Col>

        <Modal opened={openFeatureModal} onClose={() => setOpenFeatureModal(false)} title="Feature">
            <FeatureForm loading={loading} setOpenFeatureModal={setOpenFeatureModal} form={form} submit={SaveFeature}
                         SetImage={SetImage} />
        </Modal>
    </Grid>
}