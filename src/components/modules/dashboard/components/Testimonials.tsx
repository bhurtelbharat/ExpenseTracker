import { useState } from "react";
import { CardLayout } from "../common/Card";
import { Image } from "@mantine/core";
import { Trash, Pencil, CirclePlus } from "tabler-icons-react";
import { Card, Grid, ActionIcon } from '@mantine/core';

export const Testimonials = () => {
    const featuresData = [
        {
            title: "Testimonial1",
            description: "This is the first testimonial. This is the first testimonial. This is the first testimonial. This is the first testimonial. This is the first testimonial. ",
            image: "https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007_1280.jpg"
        }
    ]

    const [features, setFeatures] = useState();

    return <div className="flex justify-between">
        {
            featuresData.map((feature, index) => <div className="w-6/12 h-24" key={index}>
                <Card padding="lg" withBorder className="m-sm h-full">
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
                                <ActionIcon variant="transparent" onClick={()=>{}}>
                                    <Trash />
                                </ActionIcon>
                                <ActionIcon aria-label="Edit" variant="transparent">
                                    <Pencil />
                                </ActionIcon>
                            </div>
                        </Grid.Col>
                    </Grid>
                </Card>
            </div>
            )
        }
        <div className="w-6/12 h-24">
            <Card padding="lg" withBorder className="m-sm h-full items-center justify-center">
                <div className="flex font-semibold text-sm"><span>{<CirclePlus />}</span>Add Testimonial</div>
            </Card>
        </div>
    </div>
}