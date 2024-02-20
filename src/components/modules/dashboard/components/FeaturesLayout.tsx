import { useState,useEffect } from "react";
import { CardLayout } from "../common/Card";
import { Trash, Pencil, CirclePlus, Photo } from "tabler-icons-react";
import { Card, Grid, Modal, TextInput, GridCol, Button, Image, Textarea, ActionIcon } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FeatureModal } from "../../../partials/FeatureModal";
import { UploadImage } from "../../../../API/Features/UploadImage";
import { GetFeatures } from "../../../../API/Features/GetFeatures";



export const Features = () => {
    const [openFeatureModal, setOpenFeatureModal] = useState(false);
    const [imageName, setImageName] = useState(null);
    const [selectedData, setSelectedData] = useState(null);

    const form = useForm({
        initialValues: {
            title: '',
            description: '',
            img: ''
        },
    });

    const SetImage = (files: any) => {
        const selectedFile = files[0];
        form.setFieldValue('img', selectedFile);
    }

    const loadFeatures = async () =>{
        const res = await GetFeatures();
        setFeatures(res.data);
    }

    const SaveImage = async (files: any) => {
        const res = await UploadImage(form.values.img);
    }

    const editFeature = (feature:any) =>{
        form.setFieldValue ('title',feature.title);
        form.setFieldValue ('description', feature.description);
        //form.setFieldValue ('img', feature.img);

        setOpenFeatureModal(true);
    }

    const [features, setFeatures] = useState([]);

    useEffect(()=>{
        loadFeatures();
    },[])

    return <Grid className="flex justify-between">
        {
            features.map((feature:any, index) =>
                <Grid.Col span={6} key={index}>
                    <Card padding="lg" withBorder className="w-full h-full">
                        <Grid>
                            <Grid.Col span={4}>
                                <Image src={feature.img} />
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <div>
                                    <div className="p-1" >
                                        <div className="font-semibold text-sm">{feature.title}</div>
                                        <div className="text-xs">{feature.description}</div>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <ActionIcon variant="transparent" onClick={(event) => console.log("Clicked") }>
                                        <Trash />
                                    </ActionIcon>
                                    <ActionIcon aria-label="Edit" variant="transparent" onClick={(event) => editFeature(feature)}>
                                        <Pencil />
                                    </ActionIcon>
                                </div>
                            </Grid.Col>
                        </Grid>
                    </Card>
                </Grid.Col>
            )
        }
        <Grid.Col span={6} className="h-24">
            <div className="w-full h-full flex items-center border-dashed border-2 justify-center pointer" onClick={() => setOpenFeatureModal(true)}>
                <div className="flex font-semibold text-sm"><span>{<CirclePlus />}</span>Add Feature</div>
            </div>
        </Grid.Col>

        <Modal opened={openFeatureModal} onClose={() => setOpenFeatureModal(false)} title="Feature">
            <FeatureModal setOpenFeatureModal={setOpenFeatureModal} form={form} SetImage={SetImage}/>
        </Modal>
    </Grid>
}