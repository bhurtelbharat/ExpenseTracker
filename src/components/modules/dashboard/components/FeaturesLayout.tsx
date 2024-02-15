import { useState } from "react";
import { CardLayout } from "../common/Card";
import { Image } from "@mantine/core";
import { Trash, Pencil, CirclePlus } from "tabler-icons-react";
import { Card, Grid, Modal, TextInput } from '@mantine/core';

export const Features = () => {
    const [openFeatureModal, setOpenFeatureModal] = useState(false)
    const featuresData = [
        {
            title: "Feature1",
            description: "This is the first feature. This is the first feature. This is the first feature. This is the first feature. This is the first feature. ",
            image: "https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007_1280.jpg"
        }
    ]

    const [features, setFeatures] = useState();

    return <Grid className="flex justify-between">
        {
            featuresData.map((feature, index) =>
                <Grid.Col span={6} key={index}>
                    <Card padding="lg" withBorder className="w-full h-full">
                        <Grid>
                            <Grid.Col span={4}>
                                <Image src={feature.image} />
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <div>
                                    <div className="p-1" >
                                        <div className="font-semibold text-sm">{feature.title}</div>
                                        <div className="text-xs">{feature.description}</div>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <Trash /><Pencil />
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
            
        </Modal>
    </Grid>
}